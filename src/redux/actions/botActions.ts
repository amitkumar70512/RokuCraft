// botActions.ts

import { Bot } from "../../firebase/interface";
import { Dispatch } from "redux";
import { getBotByUserName } from "../../firebase/bots";

// Action Types
export const SET_BOT_DATA = "SET_BOT_DATA";

// Action Creators
export const setBotData = (bot: Bot | null) => ({
  type: SET_BOT_DATA,
  payload: bot,
});

export const fetchBotByUserName = (botUserName: string | null) => {
  return async (dispatch: Dispatch) => {
    try {
      if (botUserName) {
        const bot = await getBotByUserName(botUserName); // Assuming getBotById is defined and returns a Promise<Bot|null>
        dispatch(setBotData(bot));
        localStorage.setItem("botUserName", botUserName); // Move this to the component if needed
      } else {
        dispatch(setBotData(null)); // Reset bot data if botUserName is null
      }
    } catch (error) {
      console.error("Error fetching bot:", error);
    }
  };
};
