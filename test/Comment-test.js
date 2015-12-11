var React = require('react');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var Comment = require('../app/Comment.js');

describe('comment', function () {
    it('renders without problems', function () {
        var comment = TestUtils.renderIntoDocument(<Comment author="Dan">test comment</Comment>);
        expect(comment).toExist();
    });
});