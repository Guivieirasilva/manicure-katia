export default function ValidationEmail(email: string) {
   const re = /\S+@\S+\.\S+/;
   return re.test(email);
 }