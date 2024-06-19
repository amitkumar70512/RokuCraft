import { logEvent } from 'firebase/analytics';
import {analytics } from '../firebase';


function logButtonClickEvent(button_name,page_name) {
  logEvent(analytics, 'button_click', {
    button_name: button_name||'submit_button',
    page: page_name||'homepage',
  });
}
