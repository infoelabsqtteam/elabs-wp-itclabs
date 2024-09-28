gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({
	nullTargetWarn: false,
	trialWarn: false
});
/*----  Functions  ----*/
function ts_img_animation() {
	const boxes = gsap.utils.toArray('.ts-animation-style1,.ts-animation-style2');
	boxes.forEach(img => {
		gsap.to(img, {
			scrollTrigger: {
				trigger: img,
				start: "top 70%",
				end: "bottom bottom",
				toggleClass: "active",
				once: true,
			}
		});
	});
}

// ** Hover Image Effect ** \\
function ts_hover_img() {
	const tsHoverImg = gsap.utils.toArray(".ts-servicebox-style-9");
	tsHoverImg.forEach((target) => {
		const tsImg = target.querySelector('.themestek-hover-img');
		const t1 = gsap.timeline();
		t1.to(tsImg, {
			opacity: 1,
			duration: 0.4,
			scale: 1,
			ease: "Power2.easeOut"
		})
		target.tsHoverAnim = t1.play().reversed(true);
		target.addEventListener("mouseenter", tshoverimg);
		target.addEventListener("mouseleave", tshoverimg);
		target.addEventListener("mousemove", (e) => {
			let xpos = e.offsetX;
			let ypos = e.offsetY;
			const t1 = gsap.timeline();
			t1.to(tsImg, { x: xpos, y: ypos });
		});
	});

	function tshoverimg() {
		this.tsHoverAnim.reversed(!this.tsHoverAnim.reversed());
	}
}


function ts_horizontal_style() {
	const sections = gsap.utils.toArray(".themestek-boxes-element-service-style-10 .ts-box-col-wrapper");
	if (sections.length < 1) {
		return
	}
	ScrollTrigger.matchMedia({
		"(min-width:768px)": function() {

			let maxWidth = 0;
			const getMaxWidth = () => {
				maxWidth = 0;
				sections.forEach((section) => {
					maxWidth += section.offsetWidth;
					maxWidth += gsap.getProperty(section, 'marginLeft');
				});
				maxWidth += 30;
				maxWidth += window.innerWidth;
				maxWidth -= sections[0].offsetWidth;
				return maxWidth;
			};

			getMaxWidth();
			ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

			if( jQuery('body').hasClass('rtl') ){

				gsap.to(sections, {
					x: () => `+${maxWidth - window.innerWidth}`,
					ease: "none",
					scrollTrigger: {
						trigger: ".themestek-boxes-element-service-style-10",
						pin: true,
						scrub: true,
						end: () => `+=${maxWidth}`,
						invalidateOnRefresh: true,
						onEnter: function() {
							if (jQuery('.themestek-boxes-element-service-style-10').length) {
								jQuery('.themestek-boxes-element-service-style-10 .ts-heading-desc, .themestek-boxes-element-service-style-10 .ts-cta3-content-wrapper').addClass('ts-hide-info');
							}
						},
						onLeaveBack: function() {
							if (jQuery('.themestek-boxes-element-service-style-10').length) {
								jQuery('.themestek-boxes-element-service-style-10 .ts-heading-desc, .themestek-boxes-element-service-style-10 .ts-cta3-content-wrapper').removeClass('ts-hide-info');
							}
						},
						onUpdate: (self) => {
						   // Do nothing for now
						}
					}
				});

			} else {

				gsap.to(sections, {
					x: () => `-${maxWidth - window.innerWidth}`,
					ease: "none",
					scrollTrigger: {
						trigger: ".themestek-boxes-element-service-style-10",
						pin: true,
						scrub: true,
						end: () => `+=${maxWidth}`,
						invalidateOnRefresh: true,
						onEnter: function() {
							if (jQuery('.themestek-boxes-element-service-style-10').length) {
								jQuery('.themestek-boxes-element-service-style-10 .ts-heading-desc, .themestek-boxes-element-service-style-10 .ts-cta3-content-wrapper').addClass('ts-hide-info');
							}
						},
						onLeaveBack: function() {
							if (jQuery('.themestek-boxes-element-service-style-10').length) {
								jQuery('.themestek-boxes-element-service-style-10 .ts-heading-desc, .themestek-boxes-element-service-style-10 .ts-cta3-content-wrapper').removeClass('ts-hide-info');
							}
						},
						onUpdate: (self) => {
						  // Do nothing for now
						}
					}
				});

			}


			sections.forEach((sct, i) => {
				let pos = sections[0].offsetWidth * (i + 1);
				ScrollTrigger.create({
					trigger: sct,
					start: () => 'top top-=' + (pos - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
					end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
					toggleClass: { targets: sct, className: "active" }
				});
			});
		}
	});

}

function getpercentage(x, y, elm) {
	elm.find('.ts-fid-inner').html(y + '/' + x);
	var cal = Math.round((y * 100) / x);
	return cal;
}



function ts_scroller_portfolio() {
	if (!jQuery('.ts-element-portfolio-style-3').length) {
		return;
	}

	ScrollTrigger.matchMedia({
		"(min-width:1200px)": function() {

			gsap.set(".ts-element-portfolio-style-3  .pbminfotech-img-wrapper", { zIndex: (i, target, targets) => targets.length - i });
			const images = gsap.utils.toArray('.ts-element-portfolio-style-3 .pbminfotech-img-wrapper:not(:last-child)');
			gsap.set(".ts-element-portfolio-style-3 ", { height: ((images.length + 1) * 100) + 'vh' });

			images.forEach((image, i) => {
				var tl = gsap.timeline({
					scrollTrigger: {
						trigger: ".ts-element-portfolio-style-3 ",
						start: () => "top -" + (window.innerHeight * (i)),
						end: () => "+=" + window.innerHeight,
						scrub: true,
						toggleActions: "play none reverse none",
						invalidateOnRefresh: true,
					}
				})
				tl.fromTo(image, { height: () => { return "100%" } }, { height: () => { return "0%" }, ease: "none" });
			});
			ScrollTrigger.create({
				trigger: ".ts-element-portfolio-style-3 ",
				pin: '.ts-element-portfolio-style-3  .pbminfotech-img-box',
				start: () => "top top",
				end: () => "+=" + ((images.length) * (window.innerHeight)),
				invalidateOnRefresh: true,
			});
		}
	});
}
 
function ts_portfolio_effect() {
	const images = gsap.utils.toArray('.themestek-boxes-element-portfolio-style-7.themestek-boxes-view-default.themestek-boxes-col-two .ts-box-col-wrapper, .themestek-boxes-element-team-style-7 .ts-box-col-wrapper');
	if (images.length == 0) return
	const images_inner = gsap.utils.toArray('.themestek-boxes-view-default.themestek-boxes-col-two .ts-portfoliobox-style-7 .themestek-item-thumbnail, .ts-teambox-style-7 .themestek-item-thumbnail');
	images.forEach(img => {
		gsap.to(img, {
			scrollTrigger: {
				trigger: img,
				start: "top 70%",
				end: "bottom bottom",
				toggleClass: "active",
				once: true,
			}
		});
	});
	images_inner.forEach(img => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: img,
				start: "top 20%",
				end: "bottom bottom",
				scrub: 3
			},
		});
		tl.fromTo(img, { y: 0 }, { y: 40 })
	});
}

function ts_title_animation() {

	ScrollTrigger.matchMedia({
		"(min-width: 1024px)": function() {

			var ts_var = jQuery('.ts-heading-subheading');
			if (!ts_var.length) {
				return;
			}
			const quotes = document.querySelectorAll(".ts-heading-subheading .ts-custom-heading-title");
			quotes.forEach(quote => {
				var getclass = quote.closest('.ts-heading-subheading').className;
				var animation = getclass.split('animation-');
				if (animation[1] == "style4") return

				quote.split = new SplitText(quote, {
					type: "lines,words,chars",
					linesClass: "split-line"
				});
				gsap.set(quote, { perspective: 400 });

				if (animation[1] == "style1") {
					gsap.set(quote.split.chars, {
						opacity: 0,
						y: "90%",
						rotateX: "-40deg"
					});
				}
				if (animation[1] == "style2") {
					gsap.set(quote.split.chars, {
						opacity: 0,
						x: "50"
					});
				}
				if (animation[1] == "style3") {
					gsap.set(quote.split.chars, {
						opacity: 0,
					});
				}
				gsap.to(quote.split.chars, {
					scrollTrigger: {
						trigger: quote,
						start: "top 90%",
					},
					x: "0",
					y: "0",
					rotateX: "0",
					opacity: 1,
					duration: 1,
					ease: Back.easeOut,
					stagger: .02
				});
			});
		},
	});

} 

function ts_action_box() {
	const ts_elm = gsap.utils.toArray('.ts-action-box');
	if (ts_elm.length == 0) return

	ScrollTrigger.matchMedia({
		"(min-width: 1200px)": function() {
			ts_elm.forEach((box, i) => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: box,
						pin: true,
						start: "top top",
						end: "+=700px",
						scrub: 1
					},
					defaults: { ease: "none" }
				});
				tl.fromTo(box.querySelector(".ts-action-box-circle-wrap"), { clipPath: 'circle(15% at 50% 50%)' }, { clipPath: 'circle(100% at 50% 50%)', duration: 3 })
				tl.fromTo(box.querySelector(".ts-action-box-wrap"), { clipPath: 'inset(10% 20% 20% 20%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 3 })
				tl.fromTo(box.querySelector(".ts-action-content"), { opacity: 0, y: "70%", }, { opacity: 1, y: 0, duration: 1.5 })
				tl.fromTo(box.querySelector(".ts-action-content"), { opacity: 1 }, { opacity: 1, duration: 5 })
			});
		}
	});
}

function ts_bg_change() {

	const $section = jQuery(".site-content-wrapper");
	const $startTriggers = gsap.utils.toArray(".ts-bg-change");
	if (!$startTriggers[0]) {
		return
	}

	$startTriggers.forEach(elm => {
		let $startTrigger = jQuery(elm);
		const color = $startTrigger.css("background-color");
		$startTrigger.css("background-color", "transparent");

		ScrollTrigger.create({
			trigger: $startTrigger,
			start: "top 20%",
			end: '+=50%',
			onEnter: () => {
				gsap.to($section, {
					backgroundColor: color,
					overwrite: "auto"
				})
				$startTrigger.addClass("ts-text-color-white");
			},
			onEnterBack: () => {
				gsap.to($section, {
					backgroundColor: color,
					overwrite: "auto"
				})
				$startTrigger.addClass("ts-text-color-white");
			},
			onLeaveBack: () => {
				gsap.to($section, {
					backgroundColor: 'rgba(255,255,255,1)',
					overwrite: "auto"
				})
				$startTrigger.removeClass("ts-text-color-white");
			},
			onLeave: () => {
				gsap.to($section, {
					backgroundColor: 'rgba(255,255,255,1)',
					overwrite: "auto"
				})
				$startTrigger.removeClass("ts-text-color-white");
			}
		});
	});
}


ScrollTrigger.matchMedia({
	"(max-width: 1200px)": function() {
		ScrollTrigger.getAll().forEach(t => t.kill());
	}
});

// on load
jQuery(window).load(function() {
	ts_title_animation();
	ts_hover_img(); 
	ts_horizontal_style(); 
	ts_img_animation(); 
	ts_scroller_portfolio(); 
	ts_portfolio_effect(); 
	ts_action_box();
	ts_bg_change(); 
	
	gsap.delayedCall(1, () =>
		ScrollTrigger.getAll().forEach((t) => {
			t.refresh();
		})
	);
});