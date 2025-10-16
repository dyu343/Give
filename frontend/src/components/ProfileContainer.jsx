import React, { useEffect, useState } from "react";
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import TextField from "../components/TextField"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export default function ProfileContainer({content}) {
  const { user } = useAuth();
  const [userGroups, setUserGroups] = useState([]);

  const displayName = user?.displayName || 'User';
  const profilePic = user?.photoURL || '/images/noPfp.jpg';

  const navigate = useNavigate();

  // Navigates to /profile.
  const goToHome = () => {
    navigate('/home');
  };

  const saveDisplayName = () => {
    console.log("saving display name")
  };

  // Initialize Firestore, and fetch user groups.
  useEffect(() => {
    console.log("Fetching user groups...");
    
    const db = getFirestore();

    const fetchUserGroups = async () => {

        const q = query(
              collection(db, "groups"),
              where("members", "array-contains", user.uid)
        );

        const querySnapshot = await getDocs(q);
        const groups = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUserGroups(groups);
    };

    if (user) {
      fetchUserGroups();
    }
    
  }, [user]);

  return (
    <div style={{ borderRadius: "2rem 2rem 0 0" }} className="flex flex-col h-screen w-[100%] bg-defaultPink">

      <button className="font-medium text-gray-700 text-left pl-3 pt-2 text-white" onClick={goToHome}>← Home</button>

      <img
          src={profilePic}
          alt={`${displayName} profile`}
          className="w-1/4 h-1/3 mx-auto object-cover rounded-full"
        />

      <TextField fieldName={"Display Name"} saveFunction={saveDisplayName}></TextField>

      {/** Group list and Poll list goes here.*/}
      <div className="flex">
        {/** Group list */}
        <div className="w-1/2 h-full border">
          <p>Your Groups</p>
        </div>
        {/** Polls list */}
        <div className="w-1/2 h-full border">
          <p>Your Polls</p>
        </div>
      </div>
    </div>
  );
}