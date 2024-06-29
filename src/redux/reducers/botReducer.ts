// botReducer.ts

import { Bot } from "../../firebase/interface";
import { SET_BOT_DATA } from '../actions/botActions'; // Adjust the path as needed

// Define the state interface
export interface BotState {
  botData: Bot | null;
}

// Initial state
const initialState: BotState = {
  botData: null,
};

// Reducer function
const botReducer = (state = initialState, action: any): BotState => {
  switch (action.type) {
    case SET_BOT_DATA:
      return {
        ...state,
        botData: action.payload,
      };
    default:
      return state;
  }
};

export default botReducer;
