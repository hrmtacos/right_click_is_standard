$('a').each(function() {
    let href = $(this).attr('href');
    if (href != null) {
      if (href.slice(0,1) != '/' && href.slice(0,1) != '#' && href.slice(0,10) != 'javascript') {
        if (href.indexOf('atlassian.net') === -1) {
          $(this).attr('target','_blank');
        }
      }
    }
  });