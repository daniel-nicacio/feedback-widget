import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,

    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    right: 16,
    bottom: getBottomSpace() + 16,
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,
    padding: getBottomSpace() + 16,
  },
  indicator: {
    backgroundColor: theme.colors.text_on_brand_color,
    width: 56,
  },
});
