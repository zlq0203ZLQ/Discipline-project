	$(function(){
		//meau
		var status = 0; //没h
		$(".meau").on("click",function(){
			if(status == 0){
				$('.navigation').addClass('h');
				status = 1;
			}else{
				$('.navigation').removeClass('h');
				status = 0;
			}
		})
		//scrollTop
		var banner_h =$(".banner").height();
		var analysis_h =$(".analysis").height();
		var server_h =$(".server").height();
		var shadow_h =$(".shadow").height();
		var resources_h =$(".resources").height();
		var information_h =$(".information").height();
		$(".home-page").on("click",function(){
			$("body").stop(true).animate({"scrollTop":0});
		});
		$(".date-center,.results-show,.competitive-analysis").on("click",function(){
			$("body").stop(true).animate({"scrollTop":banner_h});
		});
		$(".subject-service").on("click",function(){

			$("body").stop(true).animate({"scrollTop":banner_h + analysis_h});
		});
		$(".academic-resources").on("click",function(){
			$("body").stop(true).animate({"scrollTop":banner_h + analysis_h + server_h + shadow_h });
		});
		$(".contact-us").on("click",function(){
			$("body").stop(true).animate({"scrollTop":banner_h + analysis_h + server_h + shadow_h + resources_h + information_h });
		});
		$(".back").on("click",function(){
			$("body").stop(true).animate({"scrollTop":0});
		})
		if($(window).width() < 970){
			var banner_h =$(".banner").height();
			var analysis_h =$(".analysis").height();
			var server_h =$(".server").height();
			var shadow_h =$(".shadow").height();
			var resources_h =$(".resources").height();
			var information_h =$(".information").height();
			$(".home-page").on("click",function(){
			$("body").stop(true).animate({"scrollTop":0});
			});
			$(".date-center,.results-show,.competitive-analysis").on("click",function(){
				$("body").stop(true).animate({"scrollTop":banner_h});
			});
			$(".subject-service").on("click",function(){

				$("body").stop(true).animate({"scrollTop":banner_h + analysis_h + server_h});
			});
			$(".academic-resources").on("click",function(){
				$("body").stop(true).animate({"scrollTop":banner_h + analysis_h + server_h + shadow_h + resources_h - 150});
			});
			$(".contact-us").on("click",function(){
				$("body").stop(true).animate({"scrollTop":banner_h + analysis_h + server_h + shadow_h + resources_h + information_h + 100 });
			});
			$(".return").on("click",function(){
				$("body").stop(true).animate({"scrollTop":0});
			})
			$(window).scroll(function(){
				if(status == 1){
					$('.navigation').addClass('h');
						status = 0;
				}else{
					$('.navigation').removeClass('h');
					
				}
				if($(window).scrollTop() > banner_h - 100){
					$(".back").addClass("h");
				}else{
					$(".back").removeClass("h");
				}

			})


		}
		
		//fadeIn
		$(".aca,.part,.article,.leader,.part-two,.article-t,.discipline,.part-three,.need,.contact,.addres,.location,.website,.share,.click,.registe").hide();
		$(window).scroll(function(){
			if($(window).scrollTop() > banner_h/2 && $(window).scrollTop() < banner_h  ){
				$(".aca,.part,.article").fadeIn(800);
			}else if($(window).scrollTop() > banner_h + 100 && $(window).scrollTop() < banner_h + analysis_h + 100){
				$(".leader,.part-two,.article-t").fadeIn(800);
			}else if($(window).scrollTop() > banner_h + analysis_h + server_h && $(window).scrollTop() < banner_h + analysis_h + server_h + 100 ){
				$(".discipline,.part-three,.need").fadeIn(800);
			}else if($(window).scrollTop() > banner_h + analysis_h + server_h +shadow_h + 300){
				$(".contact,.addres,.location,.website,.share,.click,.registe").fadeIn(800);
			}
			
		})
		//small-screen clear
		if($(window).width() < 970){
				$(".aca,.part,.article,.leader,.part-two,.article-t,.discipline,.part-three,.need,.contact,.addres,.location,.website,.share,.click,.registe").show();
			}

		$(window).resize(function(){
			if($(window).width() < 970){
				$(".aca,.part,.article,.leader,.part-two,.article-t,.discipline,.part-three,.need,.contact,.addres,.location,.website,.share,.click,.registe").show();
			}			
		})

		//baidumap
		$(".btn").on("click", function () {
			$(".map").show();
		var map = new BMap.Map("allmap");
		var point = new BMap.Point(118.786511, 32.029147);
		map.centerAndZoom(point, 15);
		var marker = new BMap.Marker(point); // 创建标注
		map.addOverlay(marker); // 将标注添加到地图中
		marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
		var opts = {
			position: point, // 指定文本标注所在的地理位置
			offset: new BMap.Size(10, -70) //设置文本偏移量
		}
		var label = new BMap.Label("欣才IT学院", opts); // 创建文本标注对象
		label.setStyle({
			color: "red",
			fontSize: "12px",
			height: "20px",
			lineHeight: "20px",
			borderRadius: "4px",
			fontFamily: "微软雅黑"
		});
		map.addOverlay(label);            
		map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
		map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用	
		})
		$("#closed").on("click", function () {
			$(".map").hide();
		})


		$(window).resize(function(){
			var w_w = $(window).width();
			$(".map").css({"width":w_w});
			$(".map").html('<div id="allmap"></div><div id="closed">X</div>');
			var map = new BMap.Map("allmap");
			var point = new BMap.Point(118.786511, 32.029147);
			map.centerAndZoom(point, 15);
			var marker = new BMap.Marker(point); // 创建标注
			map.addOverlay(marker); // 将标注添加到地图中
			marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
			var opts = {
				position: point, // 指定文本标注所在的地理位置
				offset: new BMap.Size(10, -70) //设置文本偏移量
			}
			var label = new BMap.Label("欣才IT学院", opts); // 创建文本标注对象
			label.setStyle({
				color: "red",
				fontSize: "12px",
				height: "20px",
				lineHeight: "20px",
				borderRadius: "4px",
				fontFamily: "微软雅黑"
			});
			map.addOverlay(label);            
			map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
			map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
			$("#closed").on("click", function () {
			$(".map").hide();
			})
		})


})

	