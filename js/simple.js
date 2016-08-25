(function(window) {

    var simpleLib = function() {
        var _me = this;
        // Properties
        _me.startMessage = 'It\'s that simple.';
        
        // Method Declaration
        function init() {
            document.getElementById('simple-start').innerHTML = _me.startMessage;
        };

        // Initialize the library
        init();
    };

    window.simple = new simpleLib();

})(window);