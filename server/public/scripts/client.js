var app = angular.module('myApp', ['moment-picker'])

.config (['momentPickerProvider', function (momentPickerProvider) {
    momentPickerProvider.options({
        /* Picker properties */
        locale:        'en',
        format:        'L LTS',
        minView:       'decade',
        maxView:       'minute',
        startView:     'month',
        autoclose:     true,
        today:         true,
        keyboard:      true,
        
        /* Extra: Views properties */
        leftArrow:     '&larr;',
        rightArrow:    '&rarr;',
        yearsFormat:   'YYYY',
        monthsFormat:  'MMM',
        daysFormat:    'D',
        hoursFormat:   'HH:[00]',
        minutesFormat: moment.localeData().longDateFormat('LT').replace(/[aA]/, ''),
        secondsFormat: 'ss',
        minutesStep:   5,
        secondsStep:   1
    });
}]);