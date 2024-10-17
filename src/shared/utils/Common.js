export const  FormatDriveLink = link => {
    if (link?.includes('preview')) {
      return link;
    } else if (link?.includes('sharing') || link?.includes('editing') || link?.includes('view') || link?.includes('edit')) {
      const formattedLink = link?.split(/(?:sharing|editing|view)/)[0] + 'preview';
      return formattedLink;
    } else {
      return 'Invalid Link';
    }
  };