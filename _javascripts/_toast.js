/**
生成 angular material 风格的toast提示
https://material.angularjs.org/latest/demo/toast
@param options {Object}
    - content {?String} 内容文字。不提供时为'default toast'
    - duration {?Number} 持续时间。不提供时为3000
*/
$.showJmToast = function(options) {

    $('.jm-toast').remove()

    let content = options.content || 'default toast'
    let duration = options.duration || 3000

    let toastHTML = `<div class="jm-toast">${content}</div>`

    let $toast = $(toastHTML)

    $('body').append($toast)

    setTimeout(function() {
        $toast.addClass('show')
        setTimeout(function() {
            $toast.removeClass('show')
            setTimeout(function() {
                $toast.remove()
            }, 400)
        }, duration)
    }, 10)

}