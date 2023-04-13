import { colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		display: "flex",
		height: "100%",
		alignContent: "center",
		alignItems: "center",
		justifyContent: "flex-start",
		backgroundColor: colors.cream,
		flex: 1,
	},
	swiperContainer: {
		flex: 0.55,
	},
	bottomContainer: {
		flex: 0.45,
		justifyContent: "space-evenly",
	},
	bottomContainerMeta: { alignContent: "flex-end", alignItems: "center" },
	cardImage: {
		width: "100%",
		height: "100%",
		borderRadius: 8,
		backgroundColor: "#FFFFFF",
		overflow: "hidden",
		flex: 1,
		resizeMode: "cover",
	},
	card: {
		height: "66%",
		borderRadius: 15,
		shadowRadius: 25,
		shadowColor: colors.black,
		shadowOpacity: 0.08,
		shadowOffset: { width: 0, height: 0 },
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.white,
		elevation: 5,
	},
	text: {
		textAlign: "center",
		fontSize: 50,
		backgroundColor: "transparent",
		textBreakStrategy: "simple",
		alignSelf: "stretch",
		lineHeight: 50,
	},
	heading: {
		position: "absolute",
		bottom: 30,
		left: 10,
		fontSize: 28,
		lineHeight: 28,
		marginTop: 10,
		marginBottom: 10,
		color: colors.white,
		shadowRadius: 25,
		textShadowColor: "rgba(0, 0, 0, 0.8)",
		textShadowOffset: { width: 0, height: 0 },
		textShadowRadius: 12,
		padding: 5,
		fontWeight: "700",
		overflow: "visible",
	},
	price: {
		position: "absolute",
		bottom: 0,
		left: 10,
		color: colors.green,
		marginBottom: 10,
		fontSize: 24,
		lineHeight: 24,
		fontWeight: "500",
		textShadowColor: "rgba(0, 0, 0, 0.8)",
		textShadowOffset: { width: 0, height: 0 },
		textShadowRadius: 12,
		overflow: "visible",
		padding: 5,
	},
	done: {
		textAlign: "center",
		fontSize: 30,
		color: colors.white,
		backgroundColor: "transparent",
	},
	linearGradient: {
		position: "absolute",
		width: "100%",
		height: "100%",
	},
	likeButton: {
		width: 90,
		height: 90,
		backgroundColor: colors.creamGreen,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		margin: 20,
	},
	likeText: {
		color: colors.white,
		fontSize: 24,
		fontWeight: "700",
	},
	dislikeButton: {
		width: 90,
		height: 90,
		backgroundColor: colors.creamRed,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		margin: 20,
	},
	dislikeText: {
		color: colors.white,
		fontSize: 24,
		fontWeight: "700",
	},
	superLikeButton: {
		width: 70,
		height: 70,
		backgroundColor: colors.creamPurple,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		margin: 20,
	},
	superLikeText: {
		color: colors.white,
		fontSize: 24,
		fontWeight: "700",
	},
	bottomContainerButtons: {
		flexDirection: "row-reverse",
		justifyContent: "space-evenly",
		alignItems: "center",
		position: "absolute",
		bottom: 5,
		left: 0,
		right: 0,
		height: 100,
		backgroundColor: "transparent",
	},
	btnImage: {
		width: 40,
		height: 40,
		tintColor: colors.white,
	},
	infoButton: {
		width: 75,
		height: 75,
		backgroundColor: "#ff6a14",
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		margin: 20,
	},
	descContainer: {
		position: "absolute",
		backgroundColor: colors.white,
		color: colors.white,
		top: 0,
		width: "100%",
		height: "100%",
		borderRadius: 8,
		overflow: "hidden",
	},
	descText: {
		color: colors.black,
		fontSize: 16,
		fontWeight: "500",
		padding: 30,
		bottom: 0,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		position: "absolute",
		bottom: 15,
		left: 0,
		right: 0,
		height: 100,
		backgroundColor: "transparent",
	},
	likeBadge: {
		position: "absolute",
		top: 10,
		right: 10,
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: colors.gold,
		justifyContent: "center",
		alignItems: "center",
	},
});
