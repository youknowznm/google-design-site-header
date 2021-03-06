let siteNameWords = ['jQuery', 'Material']

$(function() {

    $('.jm-header').initHeader({
        pageTitle: 'jQuery Material',
        siteNameWords,
        navContents: ['articles', 'resources', 'events', 'jobs', 'news', 'about'],
    })

    $('.jm-footer').initFooter({
        siteInfo: {
            siteNameWords,
            siteAuthorName: 'youknowznm',
            siteAuthorHomepage: 'https://github.com/youknowznm',
            siteSourceLink: 'https://github.com/youknowznm/jqueryMaterial.js',
        },
        socialInfo: {
            wechatQrLink: './_images/footer/wechat-qr.png',
            email: 'znm92@icloud.com',
            zhihuLink: 'https://www.zhihu.com/people/youkonwznm',
            githubLink: 'https://github.com/youknowznm',
        },
    })

    $('.jm-input').initInput()

    $('.jm-button').initButton(function($t) {
        $.showJmToast(`You clicked one of [${$t.parent().prev().html().toUpperCase()}].`);
    })

    $('.show-alert').bindClickListener(function() {
        $.showJmDialog({
            dialogType: 'alert',
            title: 'This is an alert title',
            content: 'You can specify some description text in here.',
            confirmButtonText: 'got it!',
            onConfirm() {
                $.showJmToast(`You dismissed the alert.`);
            }
        })
    })

    $('.show-confirm').bindClickListener(function() {
        $.showJmDialog({
            dialogType: 'confirm',
            title: 'Would you like to delete your debt?',
            content: 'All of the banks have agreed to forgive you your debts.',
            cancelButtonText: 'sounds like a scam',
            confirmButtonText: 'please do it!',
            onCancel() {
                $.showJmToast(`You were smart enough.`);
            },
            onConfirm() {
                $.showJmToast(`You were cheated.`);
            },
        })
    })

    $('.show-prompt').bindClickListener(function() {
        $.showJmDialog({
            dialogType: 'prompt',
            title: 'How would you like to name your dogs?',
            content: 'Bowser is a common name.',
            cancelButtonText: 'I\'m a cat person',
            confirmButtonText: 'OK!',
            promptDataArr: [{
                    name: 'Dog 1',
                    value: 'Buddy',
                },
                {
                    name: 'Dog 2',
                    value: '',
                },
            ],
            onCancel() {
                $.showJmToast(`You didn't name your dog.`);
            },
            onConfirm($t) {
                $.showJmToast(`You named your dogs '${$('#jm-prompt-input-1').val()}' and '${$('#jm-prompt-input-2').val()}'.`);
            }
        })
    })

    $('.to-top').bindClickListener(function() {
        $('body').jmScrollInto()
    })

    $('.to-input').bindClickListener(function() {
        $('.email-input-label').jmScrollInto()
    })

    $('.jm-radio-group').initRadio({
        labels: [{
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
        tagGroupName: 'Houses',
        tagsArr: ['targaryen', 'stark'],
        maxLengthEachTag: 10,
        maxTagCount: 3,
    })

    $('.jm-bg').initBackground()

    $('.jm-rte').initRte({
        id: '133',
        maxLength: 200,
        contentToEdit: '<h1>Sample Heading</h1>',
        // useRichText: false,
    })

    $('.show-toast').bindClickListener(function() {
        $.showJmToast('This is a sample toast.')
    })

})