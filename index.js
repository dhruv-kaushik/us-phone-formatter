export default function formatUSPhoneNumber(input) {
     const cleanedInput = ('' + input).replace(/\D/g, '');
     const match = cleanedInput.match(/^(\d{3})(\d{3})(\d{4})$/);

     if (match) {
       return '(' + match[1] + ') ' + match[2] + '-' + match[3];
     }

     return null;
   }