import React, { FC } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

interface Props {}

const InputField: FC<Props> = () => {
	const [input, setInput] = React.useState("");
	const [userlist, setUserList] = React.useState<string[]>([]);

	const onChangeInput = (text: string) => {
		setInput(text);
	};

	const onAddUser = () => {
		input !== "" ? setUserList([...userlist, input]) : null;
		setInput("");
	};

	return (
		<>
			<TextInput
				onChangeText={(e) => onChangeInput(e)}
				style={styles.inputfield}
				value={input}
			/>
			<Button title="Add User" onPress={onAddUser} />
			<View>
				{userlist.map((item, index) => (
					<Text style={styles.userfield} key={index}>
						{item}
					</Text>
				))}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	inputfield: {
		width: "100%",
		padding: 5,
		marginTop: 5,
		backgroundColor: "#f0f0f0",
		borderColor: "#000000",
		borderStyle: "solid",
		borderWidth: 1,
	},
	userfield: {
		fontSize: 20,
		color: "#FFFFFF",
	},
});

export default InputField;
