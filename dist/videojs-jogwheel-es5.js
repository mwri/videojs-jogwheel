'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var videojs = require('video.js');
var video_jogwheel = require('video-jogwheel').default;

var plugin = videojs.getPlugin('plugin');

var videojs_jogwheel = function (_plugin) {
    _inherits(videojs_jogwheel, _plugin);

    function videojs_jogwheel(player, options) {
        _classCallCheck(this, videojs_jogwheel);

        var _this = _possibleConstructorReturn(this, (videojs_jogwheel.__proto__ || Object.getPrototypeOf(videojs_jogwheel)).call(this, player, options));

        if (options === undefined) options = {};

        _this._options = options;

        var video = player.$$('video')[0];
        _this._video_jogwheel = new video_jogwheel(video);

        return _this;
    }

    return videojs_jogwheel;
}(plugin);

videojs_jogwheel.VERSION = '1.0.0';

videojs.registerPlugin('jogWheel', videojs_jogwheel);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi92aWRlb2pzLWpvZ3doZWVsLmpzIl0sIm5hbWVzIjpbInZpZGVvanMiLCJyZXF1aXJlIiwidmlkZW9fam9nd2hlZWwiLCJkZWZhdWx0IiwicGx1Z2luIiwiZ2V0UGx1Z2luIiwidmlkZW9qc19qb2d3aGVlbCIsInBsYXllciIsIm9wdGlvbnMiLCJ1bmRlZmluZWQiLCJfb3B0aW9ucyIsInZpZGVvIiwiJCQiLCJfdmlkZW9fam9nd2hlZWwiLCJWRVJTSU9OIiwicmVnaXN0ZXJQbHVnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVUMsUUFBUSxVQUFSLENBQWQ7QUFDQSxJQUFJQyxpQkFBaUJELFFBQVEsZ0JBQVIsRUFBMEJFLE9BQS9DOztBQUVBLElBQU1DLFNBQVNKLFFBQVFLLFNBQVIsQ0FBa0IsUUFBbEIsQ0FBZjs7SUFHTUMsZ0I7OztBQUVGLDhCQUFhQyxNQUFiLEVBQXFCQyxPQUFyQixFQUE4QjtBQUFBOztBQUFBLHdJQUVwQkQsTUFGb0IsRUFFWkMsT0FGWTs7QUFJMUIsWUFBSUEsWUFBWUMsU0FBaEIsRUFDSUQsVUFBVSxFQUFWOztBQUVKLGNBQUtFLFFBQUwsR0FBZ0JGLE9BQWhCOztBQUVBLFlBQUlHLFFBQVFKLE9BQU9LLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLENBQW5CLENBQVo7QUFDQSxjQUFLQyxlQUFMLEdBQXVCLElBQUlYLGNBQUosQ0FBbUJTLEtBQW5CLENBQXZCOztBQVYwQjtBQVk3Qjs7O0VBZDBCUCxNOztBQWtCL0JFLGlCQUFpQlEsT0FBakIsR0FBMkIsT0FBM0I7O0FBR0FkLFFBQVFlLGNBQVIsQ0FBdUIsVUFBdkIsRUFBbUNULGdCQUFuQyIsImZpbGUiOiJ2aWRlb2pzLWpvZ3doZWVsLWVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCB2aWRlb2pzID0gcmVxdWlyZSgndmlkZW8uanMnKTtcbmxldCB2aWRlb19qb2d3aGVlbCA9IHJlcXVpcmUoJ3ZpZGVvLWpvZ3doZWVsJykuZGVmYXVsdDtcblxuY29uc3QgcGx1Z2luID0gdmlkZW9qcy5nZXRQbHVnaW4oJ3BsdWdpbicpO1xuXG5cbmNsYXNzIHZpZGVvanNfam9nd2hlZWwgZXh0ZW5kcyBwbHVnaW4ge1xuXG4gICAgY29uc3RydWN0b3IgKHBsYXllciwgb3B0aW9ucykge1xuXG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcblxuICAgICAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgICBsZXQgdmlkZW8gPSBwbGF5ZXIuJCQoJ3ZpZGVvJylbMF07XG4gICAgICAgIHRoaXMuX3ZpZGVvX2pvZ3doZWVsID0gbmV3IHZpZGVvX2pvZ3doZWVsKHZpZGVvKTtcblxuICAgIH1cblxufVxuXG52aWRlb2pzX2pvZ3doZWVsLlZFUlNJT04gPSAnMS4wLjAnO1xuXG5cbnZpZGVvanMucmVnaXN0ZXJQbHVnaW4oJ2pvZ1doZWVsJywgdmlkZW9qc19qb2d3aGVlbCk7XG4iXX0=
//# sourceMappingURL=videojs-jogwheel-es5.js.map
