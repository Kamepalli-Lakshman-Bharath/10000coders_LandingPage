export const formTitleRegex =
  /^(?=.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*[a-zA-Z])[a-zA-Z0-9_.\-:,()\s'"&]*$/; // it should contain 5 alphabets, and choosen characters.
export const formMobileRegex = /^[0-9]{10}$/; // only accepts the numbers
export const formLectureRegex = /^[A-Za-z0-9_.\-:,()\s&+#]*$/; // only accepts alpha numericals
export const formMailRegex = /^.{6,}@gmail\.com$/;
