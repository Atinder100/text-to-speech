export const validateTextLanguage = (text, targetLanguage) => {
  
  const devanagariRegex = /[\u0900-\u097F]/;
  const spanishCharRegex = /[¡¿áéíóúüñÁÉÍÓÚÜÑ]/;
  
  const englishLatinRegex = /^[a-zA-Z0-9\s.,!?'"\-()]+$/;

  const hasDevanagari = devanagariRegex.test(text);
  const hasSpanishAccents = spanishCharRegex.test(text);

  switch (targetLanguage) {
    case 'hi-IN':
      
      if (!hasDevanagari) {
        return {
          valid: false,
          message: 'Language mismatch! You selected "Hindi (India)", but the text does not contain Hindi (Devanagari) characters.'
        };
      }
      break;

    case 'es-ES':
      
      if (hasDevanagari) {
        return {
          valid: false,
          message: 'Language mismatch! Hindi (Devanagari) script detected, but you selected "Spanish (Spain)".'
        };
      }
      break;

    case 'en-US':
      
      if (hasDevanagari) {
        return {
          valid: false,
          message: 'Language mismatch! Hindi (Devanagari) script detected, but you selected "English (US)".'
        };
      }

      
      if (hasSpanishAccents) {
        return {
          valid: false,
          message: 'Language mismatch! Spanish-specific characters detected (e.g., ¿, ¡, ñ), but you selected "English (US)". Please select "Spanish (Spain)".'
        };
      }
      break;

    default:
      break;
  }

  return { valid: true };
};