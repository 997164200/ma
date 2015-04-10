require.config({
        paths:{ 
            echarts:'./echarts',
            'echarts/chart/map' : './echarts-map'
        }
    });
    require(
        [
            'echarts',
            'echarts/chart/map'
        ],
        function (ec) {
		        // --- ��ͼ2222 ---
            var main3 = ec.init(document.getElementById('main3'));
             main3.setOption(option = {
							title : {
								text: 'ĳվ���û�������Դ',
								subtext: '�����鹹',
								x:'center'
							},
							tooltip : {
								trigger: 'item',
								formatter: "{a} <br/>{b} : {c} ({d}%)"
							},
							legend: {
								orient : 'vertical',
								x : 'left',
								data:['ֱ�ӷ���','�ʼ�Ӫ��','���˹��','��Ƶ���','��������']
							},
						toolbox: {
							show : true,
							feature : {
								mark : {show: true},
								dataView : {show: true, readOnly: false},
								restore : {show: true},
								saveAsImage : {show: true}
							}
						},
						calculable : true,
						series : [
							{
								name:'������Դ',
								type:'pie',
								radius : '55%',
								center: ['50%', '60%'],
								data:[
									{value:335, name:'ֱ�ӷ���'},
									{value:310, name:'�ʼ�Ӫ��'},
									{value:234, name:'���˹��'},
									{value:135, name:'��Ƶ���'},
									{value:1548, name:'��������'}
								]
							}
						]
})

			
        }
    );