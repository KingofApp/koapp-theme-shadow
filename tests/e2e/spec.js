describe('Theme e2e test', function() {
  beforeAll(function() {
    browser.driver.manage().window().setSize(400, 666);
    browser.get('http://localhost:9001/#/menu-abcd/elements-abcd');
    browser.waitForAngular();
  });

  it('should click the dialog', function(){
    var button = element(by.css('#content > div > div > div > section:nth-child(6) > div:nth-child(4) > nuevo-tema-button'));
    var EC = protractor.ExpectedConditions;

    browser.wait(EC.elementToBeClickable(button), 20000);
    button.click();
  });

  it('should load koa-menu & koa-submenu', function() {
    var identifier = '#content > div > div > div > section:nth-child(14) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-menu & koa-submenu');
    });
  });

  it('should display shadow-menu & shadow-submenu (koa-menu & koa-submenu)', function() {
    var identifier = '#content > div > div > div > section:nth-child(14)';
    element(by.css(identifier)).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-menu/);
    });
    element(by.css(identifier)).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-submenu/);
    });
  });

  it('should load koa-input & koa-textarea', function() {
    var identifier = '#content > div > div > div > section:nth-child(12) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-input & koa-textarea');
    });
  });

  it('should display shadow-input & shadow-textarea (koa-input & koa-textarea)', function() {
    var identifier = '#content > div > div > div > section:nth-child(12)';
    element(by.css(identifier)).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-input/);
    });
    element(by.css(identifier)).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-textarea/);
    });

  });




  it('should load koa-badge', function() {
    var identifier = '#content > div > div > div > section:nth-child(2) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-badge');
    });
  });

  it('should display shadow-badge (koa-badge)', function() {
    element(by.css('#content > div > div > div > section:nth-child(2)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-badge/);
    });
  });

    it('should display shadow-badge (koa-badge with a minimum dimensions)', function() {

      var selector = 'shadow-badge';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-badge (koa-badge as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-badge"))).toBe(true);
    });




  it('should load koa-button', function() {
    var identifier = '#content > div > div > div > section:nth-child(3) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-button');
    });
  });

  it('should display shadow-button (koa-button)', function() {
    element(by.css('#content > div > div > div > section:nth-child(3)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-button/);
    });
  });

    it('should display shadow-button (koa-button with a minimum dimensions)', function() {

      var selector = 'shadow-button';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-button (koa-button as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-button"))).toBe(true);
    });




  it('should load koa-card', function() {
    var identifier = '#content > div > div > div > section:nth-child(4) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-card');
    });
  });

  it('should display shadow-card (koa-card)', function() {
    element(by.css('#content > div > div > div > section:nth-child(4)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-card/);
    });
  });

    it('should display shadow-card (koa-card with a minimum dimensions)', function() {

      var selector = 'shadow-card';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-card (koa-card as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-card"))).toBe(true);
    });




  it('should load koa-checkbox', function() {
    var identifier = '#content > div > div > div > section:nth-child(5) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-checkbox');
    });
  });

  it('should display shadow-checkbox (koa-checkbox)', function() {
    element(by.css('#content > div > div > div > section:nth-child(5)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-checkbox/);
    });
  });

    it('should display shadow-checkbox (koa-checkbox with a minimum dimensions)', function() {

      var selector = 'shadow-checkbox';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-checkbox (koa-checkbox as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-checkbox"))).toBe(true);
    });




  it('should load koa-dialog', function() {
    var identifier = '#content > div > div > div > section:nth-child(6) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-dialog');
    });
  });

  it('should display shadow-dialog (koa-dialog)', function() {
    element(by.css('#content > div > div > div > section:nth-child(6)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-dialog/);
    });
  });

    it('should display shadow-dialog (koa-dialog with a minimum dimensions)', function() {

      var selector = 'shadow-dialog';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-dialog (koa-dialog as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-dialog"))).toBe(true);
    });




  it('should load koa-dropdown-menu', function() {
    var identifier = '#content > div > div > div > section:nth-child(8) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-dropdown-menu');
    });
  });

  it('should display shadow-dropdown-menu (koa-dropdown-menu)', function() {
    element(by.css('#content > div > div > div > section:nth-child(8)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-dropdown-menu/);
    });
  });

    it('should display shadow-dropdown-menu (koa-dropdown-menu with a minimum dimensions)', function() {

      var selector = 'shadow-dropdown-menu';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-dropdown-menu (koa-dropdown-menu as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-dropdown-menu"))).toBe(true);
    });




  it('should load koa-grid', function() {
    var identifier = '#content > div > div > div > section:nth-child(10) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-grid');
    });
  });

  it('should display shadow-grid (koa-grid)', function() {
    element(by.css('#content > div > div > div > section:nth-child(10)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-grid/);
    });
  });

    it('should display shadow-grid (koa-grid with a minimum dimensions)', function() {

      var selector = 'shadow-grid';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-grid (koa-grid as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-grid"))).toBe(true);
    });




  it('should load koa-icon-button', function() {
    var identifier = '#content > div > div > div > section:nth-child(11) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-icon-button');
    });
  });

  it('should display shadow-icon-button (koa-icon-button)', function() {
    element(by.css('#content > div > div > div > section:nth-child(11)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-icon-button/);
    });
  });

    it('should display shadow-icon-button (koa-icon-button with a minimum dimensions)', function() {

      var selector = 'shadow-icon-button';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-icon-button (koa-icon-button as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-icon-button"))).toBe(true);
    });




  it('should load koa-item', function() {
    var identifier = '#content > div > div > div > section:nth-child(13) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-item');
    });
  });

  it('should display shadow-item (koa-item)', function() {
    element(by.css('#content > div > div > div > section:nth-child(13)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-item/);
    });
  });

    it('should display shadow-item (koa-item with a minimum dimensions)', function() {

      var selector = 'shadow-item';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-item (koa-item as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-item"))).toBe(true);
    });




  it('should load koa-menu-button', function() {
    var identifier = '#content > div > div > div > section:nth-child(15) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-menu-button');
    });
  });

  it('should display shadow-menu-button (koa-menu-button)', function() {
    element(by.css('#content > div > div > div > section:nth-child(15)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-menu-button/);
    });
  });

    it('should display shadow-menu-button (koa-menu-button with a minimum dimensions)', function() {

      var selector = 'shadow-menu-button';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-menu-button (koa-menu-button as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-menu-button"))).toBe(true);
    });




  it('should load koa-progress', function() {
    var identifier = '#content > div > div > div > section:nth-child(17) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-progress');
    });
  });

  it('should display shadow-progress (koa-progress)', function() {
    element(by.css('#content > div > div > div > section:nth-child(17)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-progress/);
    });
  });

    it('should display shadow-progress (koa-progress with a minimum dimensions)', function() {

      var selector = 'shadow-progress';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-progress (koa-progress as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-progress"))).toBe(true);
    });




  it('should load koa-radio-button', function() {
    var identifier = '#content > div > div > div > section:nth-child(18) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-radio-button');
    });
  });

  it('should display shadow-radio-button (koa-radio-button)', function() {
    element(by.css('#content > div > div > div > section:nth-child(18)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-radio-button/);
    });
  });

    it('should display shadow-radio-button (koa-radio-button with a minimum dimensions)', function() {

      var selector = 'shadow-radio-button';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-radio-button (koa-radio-button as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-radio-button"))).toBe(true);
    });




  it('should load koa-slider', function() {
    var identifier = '#content > div > div > div > section:nth-child(19) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-slider');
    });
  });

  it('should display shadow-slider (koa-slider)', function() {
    element(by.css('#content > div > div > div > section:nth-child(19)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-slider/);
    });
  });

    it('should display shadow-slider (koa-slider with a minimum dimensions)', function() {

      var selector = 'shadow-slider';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-slider (koa-slider as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-slider"))).toBe(true);
    });




  it('should load koa-spinner', function() {
    var identifier = '#content > div > div > div > section:nth-child(20) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-spinner');
    });
  });

  it('should display shadow-spinner (koa-spinner)', function() {
    element(by.css('#content > div > div > div > section:nth-child(20)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-spinner/);
    });
  });

    it('should display shadow-spinner (koa-spinner with a minimum dimensions)', function() {

      var selector = 'shadow-spinner';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-spinner (koa-spinner as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-spinner"))).toBe(true);
    });




  it('should load koa-tabs', function() {
    var identifier = '#content > div > div > div > section:nth-child(21) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-tabs');
    });
  });

  it('should display shadow-tabs (koa-tabs)', function() {
    element(by.css('#content > div > div > div > section:nth-child(21)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-tabs/);
    });
  });

    it('should display shadow-tabs (koa-tabs with a minimum dimensions)', function() {

      var selector = 'shadow-tabs';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-tabs (koa-tabs as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-tabs"))).toBe(true);
    });




  it('should load koa-toggle-button', function() {
    var identifier = '#content > div > div > div > section:nth-child(22) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-toggle-button');
    });
  });

  it('should display shadow-toggle-button (koa-toggle-button)', function() {
    element(by.css('#content > div > div > div > section:nth-child(22)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-toggle-button/);
    });
  });

    it('should display shadow-toggle-button (koa-toggle-button with a minimum dimensions)', function() {

      var selector = 'shadow-toggle-button';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-toggle-button (koa-toggle-button as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-toggle-button"))).toBe(true);
    });




  it('should load koa-toolbar', function() {
    var identifier = '#content > div > div > div > section:nth-child(23) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-toolbar');
    });
  });

  it('should display shadow-toolbar (koa-toolbar)', function() {
    element(by.css('#content > div > div > div > section:nth-child(23)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/shadow-toolbar/);
    });
  });

    it('should display shadow-toolbar (koa-toolbar with a minimum dimensions)', function() {

      var selector = 'shadow-toolbar';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register shadow-toolbar (koa-toolbar as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("shadow-toolbar"))).toBe(true);
    });





  function isElementRegistered(label){
    return 'return document.createElement("'+label+'").constructor !== HTMLElement'
  }

  function computedDetails(label, property){
    return 'return window.getComputedStyle(document.querySelector("'+label+'"), null).getPropertyValue("'+property+'")';
  }

});
