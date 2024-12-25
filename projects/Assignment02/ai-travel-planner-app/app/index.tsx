import { Text, View } from "react-native";
import LoginScreen from "./../components/LoginScreen"
import {auth} from "./../configs/FirebaseConfig"
import { Redirect, useRouter } from "expo-router";
export default function Index() {
  const user = auth.currentUser;
  const router = useRouter()
  // Redirect to /mytrip if user is logged in
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {
        user ? (
          // Redirect to '/mytrip' (Not '/tabs/mytrip')
          <Redirect href="/mytrip" />
        ) : (
          <LoginScreen />
        )
      }
    
    </View>
  );
}
