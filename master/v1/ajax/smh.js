  new Element('span').setProperty('class', 'top').injectInside($('detail'));
  new Element('span').setProperty('id', 'close').appendText('Close').injectInside($('detail'));
  new Element('h2').appendText('Sydney Death Notices | smh.com.au').injectInside($('detail'));
  rightColumn = new Element('div').setProperty('class', 'right-column').injectInside($('detail'));
    new Element('div').setProperties({'id': 'icon', 'class': 'preview'}).injectInside(rightColumn);
      new Element('img').setProperties({'alt': 'Logo of project smh', 'src': 'images/portfolio/smh_logo.png'}).injectInside($('icon'));
    new Element('div').setProperties({'id': 'preview', 'class': 'preview'}).injectInside(rightColumn);
      new Element('img').setProperties({'id': 'bigpreview', 'alt': 'Slice of project smh', 'src': 'images/portfolio/smh.png'}).injectInside($('preview'));
  new Element('img').setProperties({'id': 'thumb', 'alt': 'Sample page of project smh', 'src': 'images/portfolio/smh_view.png'}).injectInside($('detail'));
  info = new Element('div').setProperty('class', 'info').injectInside($('detail'));
    left = new Element('div').setProperty('class', 'left').injectInside(info);
      new Element('h3').appendText('Where?').injectInside(left);
      p = new Element('p').injectInside(left);
        new Element('a').setProperties({'href': 'http://tributes.smh.com.au/', 'target': '_blank'}).appendText('http://tributes.smh.com.au/').injectInside(p);
      new Element('h3').appendText('When?').injectInside(left);
      new Element('p').appendText('Dec 01, 2009'). injectInside(left);
      new Element('h3').appendText('What?').injectInside(left);
      new Element('p').appendText('XHTML1.1, CSS2.1, JS1.5, PHP5'). injectInside(left);
    right = new Element('div').setProperty('class', 'right').injectInside(info);
      new Element('h3').appendText('Description?').injectInside(right);
      new Element('p').appendText('Death and Memoriam Notices from The Sydney Morning Herald are now published online too, so you can share memories with your loved ones.'). injectInside(right);
  new Element('span').setProperty('class', 'bottom').injectInside($('detail'));
