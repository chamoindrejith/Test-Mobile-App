import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { PaperProvider,} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.container}>
            <StatusBar style="auto" />
            <ContactUs />
          </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 20,
  },
});
