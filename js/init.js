   $(function(){
        var index = $('#container').treeNode({
            context:"<input type='checkbox' value=''>", //�ַ����滻������Ҫ��html
            marginLeft: '30px'                          //�������Ӽ��ļ��
        });
        $('#addSubset').on('click',function(){
            //����ֻ��ѡ��һ��Ԫ�أ���������������
            if($('input[type="checkbox"]:checked').length > 1){
                alert('ֻ��ѡ��һ���ڵ�');
                return;
            }
            //��������Ӽ��ķ������贫�����Զ������߲�jQueryԪ��
            index.addSubset($('input[type="checkbox"]:checked'));
        })
        $('#addSibling').on('click',function(){
            //����ֻ��ѡ��һ��Ԫ�أ���������������
            if($('input[type="checkbox"]:checked').length > 1){
                alert('ֻ��ѡ��һ���ڵ�');
                return;
            }
            //�������ͬ���ķ������贫�����Զ������߲�jQueryԪ��
            index.addSibling($('input[type="checkbox"]:checked'))
        })
        $('#deleteAll').on('click',function(){
            //����ֻ��ѡ��һ��Ԫ�أ���������������
            if($('input[type="checkbox"]:checked').length > 1){
                alert('ֻ��ѡ��һ���ڵ�');
                return;
            }
            //����ɾ���������贫�����Զ������߲�jQueryԪ��
            index.deleteRow($('input[type="checkbox"]:checked'));
        })
    });