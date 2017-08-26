/**
 * Created by Alisdon on 2017/8/11.
 */
;(function($){
    $.fn.treeNode = function (opt) {
        defaults = {
            context:"<input type='checkbox' value=''>",
            marginLeft: '30px',
        }

        var settings = $.extend({}, defaults, opt),
            $self = $(this);

        this.addSubset = function (dom) {
            var subset = $('<div node="parent-1-1"></div>').append(settings.context),
                $containerCopy = $container.clone().empty().removeAttr('node'),
                dom = dom.parent();

            var level = dom.attr('node')
            subset.attr('node', level+'-1')

            if(dom.next().find('div').length > 0){
                subset.attr('node', level + '-' + (dom.next().find('div').length/2 + 1))
            }

            $containerCopy.attr('for', subset.attr('node'));
            $('[for='+level+']').append(subset,$containerCopy);
        };

        this.addSibling = function (dom) {
            dom = dom.parent();
            var sibling = $('<div node="parent-1-1"></div>').append(settings.context),
                level = dom.parent().attr('node'), number = [],
                $containerCopy = $container.clone().empty().removeAttr('node'),
                next = dom.parent().children(), maxNode = 0, text = '';

            for(var i = 0; i < next.length; i++){
                if($(next[i]).attr('node')){
                    node = $(next[i]).attr('node').split('-');
                    var index = node[node.length - 1];
                    if (index >= maxNode) {
                        maxNode = index;
                        number = node;
                    }
                }
            };

            number.forEach(function(i, v){
                if(v < number.length-1){
                    text += i + '-';
                }
            })

            var newLevel = parseInt(maxNode)+ 1;
            sibling.attr('node',text + newLevel);
            $containerCopy.attr('for', sibling.attr('node'));
            dom.parent().append(sibling,$containerCopy);
        };

        this.deleteRow = function (dom) {
            dom.parent().next().remove();
            dom.parent().remove();
        };

        return this.each(function(){

            $container = $('<div style="margin-left:'+settings.marginLeft+';border-left:1px solid #ccc"></div>'),
            $content = $('<div node="parent-1-1"></div>').append(settings.context);
            $self.attr('node','parent-1');
            $container.attr('for', 'parent-1-1');
            $self.append($content, $container);

        })
    }
}(jQuery))