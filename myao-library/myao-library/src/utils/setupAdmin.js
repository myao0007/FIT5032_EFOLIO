// Tool script for setting up admin user
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import db from '../Firebase/init.js';

export const setupAdminUser = async () => {
  const auth = getAuth();
  
  try {
    // Create admin user
    const userCredential = await createUserWithEmailAndPassword(
      auth, 
      'admin@admin.com', 
      'admin1234'
    );
    
    const user = userCredential.user;
    
    // Set user role in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      email: 'admin@admin.com',
      role: 'admin',
      username: 'admin',
      createdAt: new Date()
    });
    
    console.log('Admin user created successfully:', user.uid);
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('Admin user already exists');
      // If user already exists, we need to find the user and set the role
      // Need to manually add role information in Firestore
      console.log('Please manually add role information to Firestore for admin@admin.com');
    } else {
      console.error('Error creating admin user:', error);
    }
  }
};

// Manually set role for existing user (if user already exists)
export const setUserRole = async (email, role) => {
  try {
    // Need to find user UID by email first
    // Since Firebase Auth doesn't have a direct method to get user by email
    // We need to save user information during registration
    console.log(`Setting role ${role} for user ${email}`);
    console.log('This function requires the user UID to work properly');
  } catch (error) {
    console.error('Error setting user role:', error);
  }
};
