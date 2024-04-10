import { useState } from "react";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useSearchUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const getUserProfile = async (username) => {
    setIsLoading(true);
    setUser(null);
    setUsers([]);
    try {
      const prefixMatchQuery = query(
        collection(firestore, "users"),
        where("searchOptions", "array-contains", username),
        limit(50)
      );
      const prefixMatchSnapshot = await getDocs(prefixMatchQuery);

      if (prefixMatchSnapshot.empty) return;

      const prefixMatchUsers = prefixMatchSnapshot.docs.map((doc) =>
        doc.data()
      );

      setUsers(prefixMatchUsers);
    } catch (error) {
      setUser(null);
      setUsers(null);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, getUserProfile, users, setUser, setUsers };
};

export default useSearchUser;
