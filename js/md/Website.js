md.Website = new JS.Class('Website', myt.View, {
    include: [myt.SizeToWindow],
    
    
    // Life Cycle //////////////////////////////////////////////////////////////
    initNode: function(parent, attrs) {
        attrs.bgColor = '#222222';
        
        attrs.minWidth = 600;
        attrs.minHeight = 600;
        
        this.callSuper(parent, attrs);
        
        this._buildUI();
        
        hideSpinner();
    },
    
    
    // Accessors ///////////////////////////////////////////////////////////////
    _buildUI: function() {
        var self = this,
            M = myt,
            V = M.View,
            T = M.Text,
            STP = M.SizeToParent,
            MD = md,
            P = MD.Photo,
            headerHeight = 75,
            vBorder = headerHeight + 50,
            spacing = 25;
        
        var galleryView = new V(this, {
            overflow:'autoy', 
            percentOfParentWidth:100,
            percentOfParentHeight:100
        }, [STP, {
            handleScroll: function(event) {
                var scrollY = this.domElement.scrollTop;
                
                var y,
                    threshold_1 = 50,
                    threshold_2 = 125;
                if (scrollY <= threshold_1) {
                    y = scrollY;
                } else if (scrollY <= threshold_2) {
                    y = threshold_1 + (threshold_1 - scrollY);
                }
                
                headerView.setY(y);
            }
        }]);
        galleryView.attachToDom(galleryView, 'handleScroll', 'scroll');
        
        // Photo Container
        var container = new V(galleryView, {percentOfParentWidth:100}, [STP]);
        
        new V(container, {
            imageUrl:MD_IMAGE_ROOT + 'bg.png',
            imageSize:'520px 470px', imageRepeat:'repeat',
            percentOfParentWidth:100, percentOfParentHeight:100,
            ignoreLayout:true
        }, [M.ImageSupport, STP]);
        
        var mainFlow = new V(container, {align:'center', y:vBorder, width:MD.PHOTO_WIDTH});
        
        new P(mainFlow, {
            file:'2016_lucid_landscapes_1.jpg',
            title:'Lucid Landscapes #1 - 2016',
            size:'13" x 13"',
            medium:'Colored pencil on bristol board',
            description:null
        });
        new P(mainFlow, {
            file:'2016_lucid_landscapes_21.jpg',
            title:'Lucid Landscapes #21 - 2016',
            size:'13" x 13"',
            medium:'Colored pencil on bristol board',
            description:null
        });
        
        new P(mainFlow, {
            file:'2016_untitled_1.jpg',
            title:'Untitled 1 - 2016',
            size:'6" x 11"',
            medium:'Graphite and colored pencil on bristol board',
            description:null
        });
        new P(mainFlow, {
            file:'2016_untitled_2.jpg',
            title:'Untitled 2 - 2016',
            size:'10" x 6"',
            medium:'Graphite and colored pencil on bristol board',
            description:null
        });
        new P(mainFlow, {
            file:'2016_untitled_3.jpg',
            title:'Untitled 3 - 2016',
            size:'6" x 11"',
            medium:'Graphite and colored pencil on bristol board',
            description:null
        });
        
        new P(mainFlow, {
            file:'2013_untitled_1.jpg',
            title:'Untitled 1 - 2013',
            size:'6" x 6"',
            medium:'Graphite pencil on bristol board',
            description:null
        });
        new P(mainFlow, {
            file:'2013_untitled_2.jpg',
            title:'Untitled 2 - 2013',
            size:'6" x 6"',
            medium:'Graphite pencil on bristol board',
            description:null
        });
        
        new P(mainFlow, {
            file:'in_the_garden.jpg',
            title:'In the Garden - 1994',
            size:'10" x 18"',
            medium:'Colored pencil on bristol board',
            description:null
        });
        new P(mainFlow, {
            file:'phoenix.jpg',
            title:'Phoenix - 1993',
            size:'10" x 10"',
            medium:'Colored pencil on paper',
            description:null
        });
        new P(mainFlow, {
            file:'1993_untitled.jpg',
            title:'Untitled - 1993',
            size:'15" x 8"',
            medium:'Colored pencil on paper',
            description:null
        });
        new P(mainFlow, {
            file:'2010_untitled.jpg',
            title:'Untitled - 2010',
            size:'6" x 9"',
            medium:'Colored pencil on paper',
            description:null
        });
        
        new M.SpacedLayout(mainFlow, {axis:'y', spacing:spacing, collapseParent:true});
        
        // Header
        var headerView = new V(galleryView, {height:headerHeight, percentOfParentWidth:100}, [STP]);
        new V(headerView, {bgColor:'#999999', opacity:0.75, percentOfParentWidth:100, percentOfParentHeight:100}, [STP]);
        new T(headerView, {
            x:25, y:19, 
            fontSize:'32px',
            textColor:'#333333',
            text:'Maynard Demmon | artist'
        });
        
        new M.SizeToChildren(container, {axis:'y', paddingY:vBorder});
    }
});
