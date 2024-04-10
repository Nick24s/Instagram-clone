import { useState } from "react";
import { firestore } from "../firebase/firebase";
import {  doc, getDoc, updateDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";
const useUpdateSearchHistory = (userId) => {
 const [isUpdating, setIsUpdating] = useState(false);
 const setAuthUser = useAuthStore((state) => state.setUser);
 const authUser = useAuthStore((state) => state.user);



 const updateSearchHistory = async (userDetails , action) => {
    setIsUpdating(true);
    try {
      const userRef = doc(firestore, "users", userId.uid);
      // Fetch the user's document
      const docSnap = await getDoc(userRef);

      if(docSnap.exists()) {
        const userData = docSnap.data();
        let searchHistory = userData.searchHistory || [];

        // Check if the username exists in the searchHistory array
        const usernameExists = searchHistory.some(item => item.username === userDetails.username);

        if(usernameExists){
          // If the username exists, remove it from the array
          await updateDoc(userRef, {
            searchHistory : searchHistory.filter(item => item.username !== userDetails.username),
          });
          // Remove the username from the local searchHistory array
          searchHistory = searchHistory.filter(item => item.username !== userDetails.username);
        }
        if(!action){
                // Add the username back to ensure it's the last item in the array
        await updateDoc(userRef,{
          searchHistory : [{
            profilePicURL : userDetails.profilePicURL,
            username : userDetails.username,
            bio : userDetails.bio},
            ...searchHistory, 
          ],
        });
        // Add the username to the local searchHistory array
        searchHistory = [{
          profilePicURL : userDetails.profilePicURL,
            username : userDetails.username,
            bio : userDetails.bio
        }, ...searchHistory];
        }

        // Update localStorage with the new searchHistory
        const userInfo = JSON.parse(localStorage.getItem("user-info")) || {};
        userInfo.searchHistory = searchHistory;
        localStorage.setItem("user-info", JSON.stringify(userInfo));
        
       setAuthUser({
        ...authUser,
        searchHistory : userInfo.searchHistory,
      });

      } 

    } catch (error) {
      console.error('Error updating search history : ', error);
    } finally {
      setIsUpdating(false);
    }
 }

 return {isUpdating , updateSearchHistory} ;
};

export default useUpdateSearchHistory;