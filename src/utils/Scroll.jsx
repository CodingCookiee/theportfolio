export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
      });
  }
};
