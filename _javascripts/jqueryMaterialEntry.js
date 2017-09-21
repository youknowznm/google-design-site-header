import $ from './jquery.js'
import '../_styles/jqueryMaterial.scss'

import './_header.js'
import './_button.js'
import './_input.js'
import './_modal.js'
import './_radio.js'
import './_tag.js'
import './_background.js'

// 判断是否移动端
let $body = $('body')
if (/Android|iPhone|Windows Phone|iPad/i.test(window.navigator.userAgent)) {
    $body.data('device', 'mobile')
} else {
    $body.data('device', 'desktop')
}

$.jmDelay = function(fn, timeout = 400) {
    setTimeout(fn, timeout)
}

$(function() {

    $('.jm-header').initHeader({
        siteNameWords: ['Previous', 'Google', 'design'],
        navContents: ['articles', 'resources', 'events', 'jobs', 'news', 'about'],
        activeNavIndex: 1,
    })

    $('.jm-button').initButton()

    $('.jm-input').initInput()

    $('.show-dialog').on('click', function() {
        $.showJmModal({
            title: 'Would you like to delete your debt?',
            content: 'All of the banks have agreed to forgive you your debts.',
            cancelButtonText: 'sounds like a scam',
            confirmButtonText: 'please do it!',
        })
    })
    $('.show-alert').on('click', function() {
        $.showJmModal({
            title: 'This is an alert title',
            content: 'You can specify some description text in here.',
            confirmButtonText: 'got it!',
            showCancel: false,
        })
    })

    $('.jm-radio-group').initRadio({
        labels: [
            {
                name: 'apple',
            },
            {
                name: 'banana',
                warn: true,
            },
            {
                name: 'grape',
                checked: true,
            },
            {
                name: 'orange',
                disabled: true,
            },
        ],
    })

    $('.jm-tag').initTag({
        tagsArr: ['targaryen', 'stark', 'lannister'],
        maxLengthEachTag: 10,
        maxTagCount: 3,
    })

})