   $(function(){
        var index = $('#container').treeNode({
            context:"<input type='checkbox' value=''>", //字符串替换成你需要的html
            marginLeft: '30px'                          //父级与子集的间距
        });
        $('#addSubset').on('click',function(){
            //限制只能选中一个元素，若不控制则会出错
            if($('input[type="checkbox"]:checked').length > 1){
                alert('只能选中一个节点');
                return;
            }
            //调用添加子级的方法。需传入你自定义的最高层jQuery元素
            index.addSubset($('input[type="checkbox"]:checked'));
        })
        $('#addSibling').on('click',function(){
            //限制只能选中一个元素，若不控制则会出错
            if($('input[type="checkbox"]:checked').length > 1){
                alert('只能选中一个节点');
                return;
            }
            //调用添加同级的方法。需传入你自定义的最高层jQuery元素
            index.addSibling($('input[type="checkbox"]:checked'))
        })
        $('#deleteAll').on('click',function(){
            //限制只能选中一个元素，若不控制则会出错
            if($('input[type="checkbox"]:checked').length > 1){
                alert('只能选中一个节点');
                return;
            }
            //调用删除方法。需传入你自定义的最高层jQuery元素
            index.deleteRow($('input[type="checkbox"]:checked'));
        })
    });