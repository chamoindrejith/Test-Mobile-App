import { StyleSheet, View } from "react-native";
import { Text, Divider, TextInput } from "react-native-paper";
import { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState();
  return (
    <>
      <View style={styles.header}>
        <Text variant="headlineLarge">Contact Us</Text>
        <Divider />
      </View>
      <View style={styles.body}>
        <Text variant="bodyMedium">
          Video provides a powerful way to help you prove your point. When you
          click Online Video, you can paste in the embed code for the video you
          want to add. You can also type a keyword to search online for the
          video that best fits your document. To make your document look
          professionally produced, Word provides header, footer, cover page, and
          text box designs that complement each other. For example, you can add
          a cover page, a header, and a sidebar. You can also add a watermark to
          a section of your document, page numbers, or date and time. Word helps
          you organize and write your documents more efficiently.

        </Text>
        <View style={styles.input}>
          <TextInput
            label="Name"
            mode="outlined"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            label="Email"
            mode="outlined"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            label="Phone Number"
            mode="outlined"
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            label="Message"
            mode="outlined"
            multiline
            numberOfLines={5}
          />
        </View>

        <Text>{name}</Text>
      </View>
      <View style={styles.footer}>
        <Text>MyApp © 2024</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 3,
    width: "100%",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  body: {
    flex: 6,
    width: "100%",
  },
  footer: {
    flex: 2,
    width: "100%",
    alignItems: "center",
  },
  input: {
    padding: 8,
    marginBottom: 10,
  },
});
