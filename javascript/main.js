$(document).ready(function () {
  'use strict'

  // allHeaders style 
  $('section > :header').css({
    fontSize: '50px',
    color: '#fff',
    marginBottom: '40px'
  })
  // dark mode
  $('.darkMode').on("click", ".theme-icon", function () {
    $(this).toggleClass('fa-moon fa-sun ')
    if ($(this).hasClass("fa-moon")) {
      $('body').attr('add', "dark")
      localStorage.setItem("changeMode", "dark")
      localStorage.setItem("add", "fa-moon")
    } else {
      localStorage.setItem("add", "fa-sun")
      localStorage.setItem("changeMode", "light")
      $('body').attr('add', "light")
    }
  })
  let ChangeDark = localStorage.getItem("add")
  let getChange = localStorage.getItem("changeMode")
  console.log(getChange);
  $('.theme-icon').addClass(ChangeDark)
  $('body').attr("add", getChange)
  // end dark mode
  // start navbar
  $("nav li a:not(:first)").on("click", function (e) {
    e.preventDefault();
    if ($(window).width() < 767) {
      $("body,html").animate(
        {
          scrollTop:
            $("#" + $(this).data("scroll")).offset().top +
            1
        },
        "slow"
      );

    } else {
      $("body,html").animate(
        {
          scrollTop:
            $("#" + $(this).data("scroll")).offset().top +
            1 -
            $("nav").innerHeight(),
        },
        "slow"
      );
    }
  });
  // add class active
  $("nav li a").click(function (e) {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .children()
      .removeClass("active");
  });
  // put class active with scroll
  // nav menu
  $(".navMenu").click(function () {
    $("nav").slideToggle()
  })
  // end nav menu
  // start window scroll 
  $(window).scroll(function (e) {
    $("section").each(function () {
      if (
        $(window).scrollTop() >
        $(this).offset().top - $("nav").innerHeight()
      ) {
        const selectedEle = $(this).attr("id");
        $("nav li a[data-scroll='" + selectedEle + "'")
          .addClass("active")
          .parent()
          .siblings()
          .children()
          .removeClass("active");

      }
      // animation on header 
      if ($(window).scrollTop() >= $(this).offset().top - 200 && $(window).scrollTop() <= $(this).offset().top) {
        $(this).find("h2").addClass("active")

      }
      if ($(window).scrollTop() > $(this).offset().top - 100 + $(this).height() || $(window).scrollTop() < $(this).offset().top - 700) {
        $(this).find("h2").removeClass("active")

      }
    });
    //   // make scroll top 
    let top = $('#top')
    if ($(window).scrollTop() >= 600) {
      if (top.is(':hidden')) {
        top.fadeIn("1000")
      }
    } else {
      top.fadeOut("1000")
    }
    // end scroll top
    // progress bar
    let scrollTop = $(window).scrollTop()
    let sectionOne = $(".section1")
    if (scrollTop >= sectionOne.offset().top - 200 && scrollTop < sectionOne.offset().top + sectionOne.innerHeight()) {
      //     // start progress skills
      $('.progress').animate({
        left: 0,
        right: 0
      }, 1000)
        .find('span').each(function () {
          $(this).animate({
            width: $(this).data('width') + "%",
          }, 3000, function () {
            $(this).text($(this).data('width') + "%")
          })
        })
    }
    //   // services section animation 
    let services = $("#Services")
    if (scrollTop >= services.offset().top - 150 && scrollTop <= services.offset().top + services.height()) {
      $(".product.one").animate({
        left: 0
      }, "fast")
        .addClass("animate__animated animate__backInLeft")
      $(".product.two").animate({
        right: 0
      }, "fast")
        .addClass("animate__animated animate__backInRight")
      // grid view
      $(".item.one").animate({
        left: 0
      }, 1500)
        .addClass("animate__animated animate__backInLeft").fadeIn(1000)
      $(".item.two").animate({
        right: 0
      }, 1500)
        .addClass("animate__animated animate__backInRight").fadeIn(1000)
    }
    //   // sart soulution section 
    if (scrollTop >= $("#Solution").offset().top - 150) {
      $('.same:first').addClass("animate__animated animate__fadeInDownBig")
      $('.same:eq(1)').addClass("animate__animated animate__fadeInUpBig")
      $('.same:last').addClass("animate__animated animate__fadeInDownBig")
      $('.same').fadeIn(1000)
    }
  })

  // make scroll top button

  $("#top").click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000)
  })
  // start popup
  $('.showPopup').click(function () {
    $($(this).data('pop')).fadeIn().click(function () {
      $(this).fadeOut()
    })
    $(".popUp >").click(function (e) {
      e.stopPropagation()
      $(this).find(".closePop").click(function () {
        $(this).parents(".popUp").fadeOut()
      })
    })
    $(document).keyup(function (e) {
      if (e.key === "Escape") {
        $('.popUp').fadeOut()

      }
    })
  })
  // make hover on buttons 
  $(".showPopup,.borderEffect.left").hover(function effect() {
    $(this).find('span').animate({
      width: '100%'
    })
  }
    , function () {
      $(this).find('span').animate({
        width: '0%'
      })

    })
  // 2nd effect on button from top 
  // plus effect with border
  $('.effect,.borderEffect.right').hover(function () {
    $(this).find('span').animate({
      height: '100%'
    })
  }
    , function () {
      $(this).find('span').animate({
        height: '0%'
      })

    })
  // end plus effect with border
  $('.fixedMenu .icon').on("click", (function () {
    $(this).children().toggleClass("fa-spin")
    $(this).parents(".fixedMenu").toggleClass("hidden")
    if ($(this).parents(".fixedMenu").hasClass("hidden")) {
      $(this).parent(".fixedMenu").animate({
        left: 0
      }, 500)
      $('body ,nav , .message,.darkMode').animate({
        paddingLeft: $(this).parent(".fixedMenu").innerWidth()
      }, 500)
    } else {
      $(this).parent(".fixedMenu").animate({
        left: -$(this).parent(".fixedMenu").innerWidth()
      }, 500)
      $('body,nav,.message,.darkMode').animate({
        paddingLeft: 0
      }, 500)

    }
  }))

  // set the message
  
$('.close__message').on("click",function(){
  $(this).parent().hide()
})
  if ($(window).width() < 767) {
    $(".message").animate({
      top: "10%",
    }, 500).animate({
      width: "+=30%"
    }, 500)
      .find("p").animate({
        fontSize: "25px",
      }, 1000).animate({
        fontSize: '20px'
      })
      .parent().delay(3000).fadeOut(800)
  } else {
    $(".message").animate({
      top: "10%",
    }, 800).animate({
      width: "+=30%"
    }, 800)
      .find("p").animate({
        fontSize: "25px",
      }, 1200).animate({
        fontSize: '20px'
      }, 1200).animate({
        fontSize: '30px'
      }).css('color', "#222")
      .parent().delay(3000).fadeOut(800)
  }
  // start setting the colors of website 
  $('.fixedMenu ul li').click(function () {
    $(this).addClass("active").siblings().removeClass("active")
    $('body').attr("data-change-color", $(this).data('color'))
    $(':header').css({
      color: $('body').attr('data-change-color'),
    })
    localStorage.setItem("color", JSON.stringify($('body').attr("data-change-color")))
    localStorage.setItem("active", "active")
  })
  $('[data-color=' + localStorage.getItem("color") + ']').addClass(localStorage.getItem("active")).siblings().removeClass("active")
  let newColor = JSON.parse(localStorage.getItem("color"))
  $('body').attr("data-change-color", newColor)
  // the slider 
  // make the silder more dynamic
  let allImgasOfThumbnails = $(".thumbnailImgs img").length
  let gap = 10
  $(".thumbnailImgs img").css({
    width: $('.img-holder').width() / allImgasOfThumbnails - gap
  })
  $(".thumbnailImgs img").click(function () {
    // clearInterval(clearIn)
    $(this).addClass("active").siblings().removeClass("active")
    $('.mainImg img').hide().attr("src", $(this).attr('src')).fadeIn("3000")
  })
  // when clik on arrows
  let getVal = JSON.parse(localStorage.getItem("data"))
  console.log(getVal);
  let Moving = "true"
  $(".arrows.right").on("click", function () {
    clearInterval(clearIn)
    autoMove()
  })
  function autoMove() {
    if ($(".thumbnailImgs img.active").is(":last-child")) {
      $(".thumbnailImgs img").eq(0).click()
    } else {
      $(".thumbnailImgs img.active").next().click();
    }
  }
  let clearIn = setInterval(autoMove, 3000)
  Moving = getVal
  if (Moving === "false") {
    clearInterval(clearIn)
  }
  $(".arrows.left").on("click", function () {
    clearInterval(clearIn)
    if ($(".thumbnailImgs img.active").is(":first-child")) {
      $(".thumbnailImgs img:last-child").click()
    } else {
      $(".thumbnailImgs img.active").prev().click();
    }
  })
  // auto background 
  $('.background span').each(function () {
    $(this).click(function () {
      $(this).addClass('active').siblings().removeClass("active")
      localStorage.setItem("data", JSON.stringify($(this).attr('data-change')))
      location.reload()
    })
  })
  $($('.background span[data-change =' + getVal + ' ]')).addClass("active").siblings().removeClass("active")

  // })
  // start ourProduct 
  $("#Services .icon .increase").click(function () {
    $(this).parent().next().slideToggle(),
      $(this).children().toggleClass("fa-plus fa-minus")

  })
  // start switch betten list and grid
  $(".switch .group").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
    $(".items .item").toggleClass("gridview listview").hide().fadeIn(1000)
  })
  // make the astersk

  let asterisk = $('<span class="asterisk">*</span>')
  asterisk.insertBefore($(":input[required]"))

  $("input[type='file'").wrap("<div class= 'customInput'></div>")
  var child =
    '<span>Choose File to Upload</span>' +
    '<i class="fa-solid fa-upload"></i>'
  $(".customInput").prepend(child)
  $(".customInput").find(".fa-upload").addClass("skin-color")
  // change value to the current value 
  $(".customInput").change(function () {
    $(this).find("span").text($(this).find("input").val()).css({
      color: "#000"
    })
  })
  // start contact us section

  // when write in input
  $("form .auto-direction").keyup(function (e) {
    if ($(this).val().charCodeAt(0) > 200) {
      $(this).css({
        direction: "rtl"
      })
      // change the text to arabic
      $('form .auto-direction').next(".english").fadeOut()
      $('form .auto-direction').each(function () {
        if ($(this).val().length == 0) {
          $(this).next().next(".arabic").fadeIn()
        } else {
          $(this).next().next(".arabic").fadeOut()
        }
      })
      $("form .auto-direction").focus(function () {
        if ($(this).val().length > 0) {
          $(this).parent('div').find("span.arabic").fadeOut()
        }
      }).blur(function () {
        if ($(this).val().length === 0) {
          $(this).parent().find('span.arabic').fadeIn()
        }
      })
      // end chnage the text
      $("form div").each(function () {
        $(this).css({
          width: $(this).find(":input").innerWidth()
        }).find(".asterisk").each(function () {
          $(this).css({
            right: ($(this).parent('div').find(":input").innerWidth() - 30),
            left: 0,

          })
        })
      })
    } else {
      $(this).css({
        direction: "ltr"
      })
      $('form').find(".arabic").fadeOut()
      // change the text to english
      $('form .auto-direction').each(function () {
        if ($(this).val().length == 0) {
          $(this).next(".english").fadeIn()
        } else {
          $(this).next(".english").fadeOut()
        }
      })
      $("form .auto-direction").focus(function () {
        $(this).next('span.english').fadeOut()
      }).blur(function () {
        if ($(this).val().length === 0) {
          $(this).next('span.english').fadeIn()
        }
      })
      // end change the text to english
      $("form div").each(function () {
        $(this).css({
          width: $(this).find(":input").innerWidth()
        }).find(".asterisk").each(function () {
          $(this).css({
            left: ($(this).parent('div').find(":input").innerWidth() - 30),
            right: 0
          })
        })

      })
    }
  })
  // start the making the tags
  let array = []
  $("form .tag").keyup(function (e) {
    if (e.keyCode === 188 || e.which === 188) {
      if ($("form .tag").val().length > 1) {
        $.each(array, function (index, val) {
          if ($("form .tag").val().slice(0, -1) === val) {
            alert("there is a value with the same")
            $("form .tag").val("")
          } else {
          }
        })
        $('.tags span').each(function () {
          if ($(this).text() === "") {
            $(this).remove("")
          }
        })
        $(".tags").append(('<span>' + $('form .tag').val().slice(0, -1) + '</span>'))
        array.push($(this).val().slice(0, -1))
        console.log(array);
        $(this).val("")
        let xmark = '<i class="fa-solid fa-xmark"></i>'
        $(".tags").find("span").append(xmark),
          $(this).val("")
        $('.tags span').on('click', '.fa-xmark', function () {
          $(this).parent().fadeOut("fast", function () {
            $(this).remove()
            let arrVal = $(this).text()
            $.each(array, function (indx, val) {
              if (arrVal === val) {
                array = jQuery.grep(array, function (value) {
                  return value != val
                })
              }
            })
          })
        })
      } else {
      }
    }
  });
  function bounce(selector, value, top, speed) {
    $(selector).on("click", function () {
      $(this).animate({
        top: '+=' + value + '',
      }, speed).animate({
        top: '-=' + value + '',
      }, speed)
    })
  }
  bounce("button", 30, 500)


  // make elements the same height 
  let maxLength = 0
  $("#Solution .same").each(function () {
    if ($(this).height() > maxLength) {
      maxLength = $(this).height()
    }
  })
  $("#Solution .same").height(maxLength)
  // start cards animation
  let index = 0
  $('.cards .card').on("click", function () {
    $(this).animate({
      right: '200px',
      top: "35px"
    }, function () {
      index--
      $(this).css({
        zIndex: index
      })
    }).animate({
      right: "0px",
      top: "0px",
    })
  })
  // todoLIst
  let arrayOfEle = JSON.parse(localStorage.getItem("Data")) || []
  getDataFromLocal()
  $("#todo").on("keyup", function (e) {
    if (e.keyCode === 13 || e.which === 13) {
      if ($(this).val().trim()) {
        let value = $(this).val()
        display(value)
        $(this).val('')
      }
    }
  })
  // stort save data in object 
  function display(val) {
    const holder = {
      title: val,
      id: Date.now(),
      state: false
    }
    arrayOfEle.push(holder)
    distribute(arrayOfEle)
    sendDataToLocal(arrayOfEle)
  }
  // start distirbute the data
  function distribute(Data) {
    $('.results').html('')
    $.each(Data, function (index, val) {
      let div = $("<div />", {
        "class": "task",
        "id": val.id,
        "state": val.state
      });
      div.text(val.title)
      if (val.state) {
        div.addClass("completed")
      }
      $(".todoList .results").append(div)
    })
  }
  // save data to localStorage
  function sendDataToLocal(arrayOfEle) {
    localStorage.setItem("Data", JSON.stringify(arrayOfEle))
  }
  // get data from local
  function getDataFromLocal() {
    let getData = JSON.parse(localStorage.getItem("Data"))
    if (getData) {
      distribute(getData)
    }
  }

  // finished tasks 
  $(document).on("click", ".task", function (e) {
    $(this).toggleClass("completed")
    let specificId = $(this).attr("id")
    completed(specificId)
  })
  function completed(specificId) {
    $.each(arrayOfEle, function (indx, val) {
      console.log(val);
      if (val.id == specificId) {
        val.state === false ? val.state = true : val.state = false
      }
      sendDataToLocal(arrayOfEle)
    })
  }
  $(document).on("contextmenu", ".task", function (e) {
    e.preventDefault()
    $(this).fadeOut(500, function () { $(this).remove() })
    let specificId = $(this).attr("id")
    removeTasks(specificId)
  })
  function removeTasks(specificId) {
    arrayOfEle = arrayOfEle.filter((ele) => ele.id != specificId)
    sendDataToLocal(arrayOfEle)
  }
  // start typewriter 
  let text = $('.typer').data("text"),
    textLength = $('.typer').data("text").length,
    n = 0
  let clear = setInterval(() => {
    $('.typer').html($('.typer').html() + text[n])
    n++
    if (n === textLength) {
      clearInterval(clear)
    }
  }, 80);
  // start text notes
  // let ActiveLi =
  function textNotes() {
    if (!$('.textholder ul li.active').is(':last-child')) {
      $(".textholder ul li.active").delay(4000).fadeOut(1000, function () {
        $(this).removeClass("active").next().fadeIn(1000).addClass("active").fadeIn(1000)
        textNotes()
      })
    } else {
      $('.textholder ul li.active').delay(4000).fadeOut(1000, function () {
        $(this).removeClass('active').parent().find("li:first-child").addClass("active").fadeIn(1000);
        textNotes()
      })
    }
  }
  textNotes()

  // start tabs 
  $(".tabsHolder ul li").click(function () {
    $('.contentHolder div').hide()
    $(this).addClass("active").siblings().removeClass("active")
    $($(this).data("tab")).fadeIn(1000)
  })
  // when click switch 
  $(".tabsHolder .switch").click(function () {
    $(this).parent().toggleClass("column")
  })
  // start making email providers
  let emilProviders = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com"],
    finalValue = ""

  $(".email-suggest").on('keyup', function () {
    finalValue = "";
    let inputVal = $(this).val()
    if (!$(this).next().is(".suggestBox")) {
      $('<ul class="suggestBox"></ul>').insertAfter($(this))
    }
    for (let i = 0; i < emilProviders.length; i++) {
      if ($(this).val().includes("@" + emilProviders[0])) {
        inputVal = $(this).val().slice(0, -emilProviders[0].length - 1)
      }
      else if ($(this).val().includes("@" + emilProviders[1])) {
        inputVal = $(this).val().slice(0, -emilProviders[1].length - 1)
      }
      else if ($(this).val().includes("@" + emilProviders[2])) {
        inputVal = $(this).val().slice(0, -emilProviders[2].length - 1)
      }
      else if ($(this).val().includes("@" + emilProviders[3])) {
        inputVal = $(this).val().slice(0, -emilProviders[3].length - 1)
      }
      finalValue += "<li>" + inputVal + '@' + emilProviders[i] + "</li>"
    }
    $(".suggestBox").html(finalValue)
  })

  $('body').on('click', ".suggestBox li", function () {
    $(".email-suggest").val($(this).text());
    $(this).parent().fadeOut().remove()
  })
})