import React, { FC } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

interface Props {
	items: number[];
	itemRemove: Function;
}

const ListItem: FC<Props> = ({ items, itemRemove }) => {
	return (
		<View style={{ width: "100%" }}>
			{items.map((item, index) => (
				<Pressable key={index} onPress={() => itemRemove(index)}>
					<View style={styles.listitem}>
						<Text>{item}</Text>
					</View>
				</Pressable>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	listitem: {
		backgroundColor: "#cecece",
		alignItems: "center",
		marginTop: 10,
		padding: 10,
		width: "100%",
	},
});

export default ListItem;
