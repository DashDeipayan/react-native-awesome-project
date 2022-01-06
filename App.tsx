import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Nav from "./src/Nav";
import Generate from "./src/Generate";
import ListItem from "./src/ListItem";
import InputField from "./src/InputField";

const App = () => {
	const [listRandom, setListRandom] = useState<number[]>([]);

	const onAddrandom = () => {
		const randomVal: number = Math.floor(Math.random() * 100) + 1;
		const newState: number[] = [...listRandom, randomVal];
		setListRandom(newState);
	};

	const onItemRemove = (pos: number) => {
		const newState: number[] = listRandom.filter(
			(item, index) => pos !== index
		);
		setListRandom(newState);
	};

	return (
		<View style={styles.mainView}>
			<Nav nameOfApp="Hello App" />
			<ScrollView style={{ width: "100%" }}>
				<View style={styles.basicView}>
					<Text style={styles.basicText}>Hello World 1</Text>
				</View>
				<View style={styles.basicView}>
					<Text style={styles.basicText}>Hello World 2</Text>
				</View>
				<View>
					<Generate onAddrandom={onAddrandom} />
				</View>
				<ListItem
					items={listRandom}
					itemRemove={(pos: number) => onItemRemove(pos)}
				/>
				<InputField />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		alignItems: "center",
		paddingTop: 50,
		backgroundColor: "blue",
	},
	basicView: {
		backgroundColor: "yellow",
		width: "100%",
		marginBottom: 10,
	},
	basicText: {
		textAlign: "center",
		fontSize: 20,
	},
});

export default App;
