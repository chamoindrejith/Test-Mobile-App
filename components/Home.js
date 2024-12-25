import { StyleSheet } from "react-native";
import { Text, Divider, Button } from "react-native-paper";

export default function Home() {
  return (
    <>
      <Text variant="headlineLarge">Hello Chamodi</Text>
      <Divider />
      <Text
        variant="bodyMedium"
        style={styles.body}
        theme={{ colors: { primary: "blue" } }}
      >
        Video provides a powerful way to help you prove your point. When you
        click Online Video, you can paste in the embed code for the video you
        want to add. You can also type a keyword to search online for the video
        that best fits your document. To make your document look professionally
        produced, Word provides header, footer, cover page, and text box designs
        that complement each other. For example, you can add a cover page, a
        header, and a sidebar. You can also add a watermark to a section of your
        document, page numbers, or date and time. Word helps you organize and
        write your documents more efficiently. Customize your document, letter,
        resume, or notes your way with robust tools that enable you to
        accomplish your best writing with the best format options and styles.
        Word gives you the capabilities to customize your writing and design
        your document to meet your specific needs. Create your document with
        your style and preference. Make your document look professional and
        polished with different formatting options. Video provides a powerful
        way to help you prove your point. When you click Online Video, you can
        paste in the embed code for the video you want to add. You can also type
        a keyword to search online for the video that best fits your document.
        To make your document look professionally produced, Word provides
        header, footer, cover page, and text box designs that complement each
        other. For example, you can add a cover page, a header, and a sidebar.
        You can also add a watermark to a section of your document, page
        numbers, or date and time. Word helps you organize and write your
        documents more efficiently. Customize your document, letter, resume, or
        notes your way with robust tools that enable you to accomplish your best
        writing with the best format options and styles. Word gives you the
        capabilities to customize your writing and design your document to meet
        your specific needs. Create your document with your style and
        preference. Make your document look professional and polished with
        different formatting options.
      </Text>

      <Button
        icon="camera"
        mode="outlined"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 20,
    textAlign: "justify",
  },
  heading: {
    textAlign: "center",
    color: "blue",
  },
});
