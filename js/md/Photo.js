md.Photo = new JS.Class('Website', myt.View, {
    include:[myt.ImageSupport, myt.Button],
    
    
    // Life Cycle //////////////////////////////////////////////////////////////
    initNode: function(parent, attrs) {
        var w = attrs.width = md.PHOTO_WIDTH,
            h = attrs.height = md.PHOTO_HEIGHT,
            file = attrs.file,
            title = attrs.title,
            size = attrs.size,
            medium = attrs.medium,
            description = attrs.description;
        delete attrs.file;
        delete attrs.title;
        delete attrs.size;
        delete attrs.medium;
        delete attrs.description;
        
        attrs.bgColor = '#000000';
        attrs.imageUrl = MD_IMAGE_ROOT + 'photos/' + file;
        attrs.imageSize = 'cover';
        attrs.calculateNaturalSize = true;
        
        this.callSuper(parent, attrs);
        
        // Build the UI
        var M = myt,
            V = M.View,
            panelX = Math.round(w * 0.618),
            panelY = 0,
            panelW = w - panelX,
            panelH = h,
            textInset = 16;
        var hoverPanel = this.hoverPanel = new V(this, {
            x:panelX, y:panelY, width:panelW, height:panelH, opacity:0
        });
        new V(hoverPanel, {width:panelW, bgColor:'#000000', opacity:0.5, percentOfParentHeight:100}, [M.SizeToParent]);
        
        var text = '<b>' + (title ? title : 'Untitled') + '</b><br/><br/>';
        text += (size ? size + ' ' : '') + (medium ? medium : '') + '<br/><br/>';
        text += description ? description : '';
        new M.Text(hoverPanel, {
            x:textInset, y:textInset, width:panelW - 2*textInset, 
            textColor:'#ffffff', whiteSpace:'normal', text:text
        });
        
        this._uiReady = true;
    },
    
    
    // Methods /////////////////////////////////////////////////////////////////
    doActivated: function() {
        this.toggled = !this.toggled;
        this.doToggled();
    },
    
    doToggled: function() {
        var nw = this.naturalWidth,
            nh = this.naturalHeight;
        if (nw) {
            var hp = this.hoverPanel,
                to = this.toggled ? md.PHOTO_WIDTH * nh / nw : md.PHOTO_HEIGHT;
            this.stopActiveAnimators('height');
            hp.stopActiveAnimators('height');
            
            this.animate({attribute:'height', from:this.height, to:to, duration:1000});
            hp.animate({attribute:'height', from:hp.height, to:to, duration:1000});
            
            this.updateUI();
        }
    },
    
    drawDisabledState: function() {this._hidePanel();},
    drawFocusedState: function() {
        if (this.toggled) {
            this._hidePanel();
        } else {
            this.drawHoverState();
        }
    },
    drawHoverState: function() {this._showPanel();},
    drawActiveState: function() {this._hidePanel();},
    drawReadyState: function() {this._hidePanel();},
    
    /** @private */
    _showPanel: function() {
        if (this._uiReady) {
            var hp = this.hoverPanel;
            hp.stopActiveAnimators('opacity');
            hp.animate({attribute:'opacity', from:hp.opacity, to:1, duration:300});
        }
    },
    
    /** @private */
    _hidePanel: function() {
        if (this._uiReady) {
            var hp = this.hoverPanel;
            hp.stopActiveAnimators('opacity');
            hp.animate({attribute:'opacity', from:hp.opacity, to:0, duration:600});
        }
    }
});
