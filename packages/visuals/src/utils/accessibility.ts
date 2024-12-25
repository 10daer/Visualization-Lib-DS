export const a11yUtils = {
    generateAriaLabel: (chartType: string, data: any[]): string => {
      const total = data.reduce((sum, item) => sum + (item.value || 0), 0);
      return `${chartType} chart showing ${data.length} data points with a total value of ${total}`;
    },
  
    getContrastColor: (backgroundColor: string): string => {
      // Convert hex to RGB
      const hex = backgroundColor.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      
      // Calculate relative luminance
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      
      return luminance > 0.5 ? '#000000' : '#ffffff';
    },
  
    enhanceKeyboardNavigation: (svgElement: SVGElement): void => {
      const elements = svgElement.querySelectorAll('path, circle, rect');
      elements.forEach((el, index) => {
        el.setAttribute('tabindex', '0');
        el.setAttribute('role', 'graphics-symbol');
        el.setAttribute('aria-label', `Data point ${index + 1}`);
      });
    }
  };