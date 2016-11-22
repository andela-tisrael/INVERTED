// Scripts
import angular from 'angular';
import InvertedIndex from './inverted-index';

angular.module('InvertedIndex', [])

.controller('IndexCtrl', ['$scope', ($scope) => {
    const index = new InvertedIndex();
    // Create index
    $scope.createIndex = (file) => {

        if (!file.name.toLowerCase().match(/\.json$/)) {
            setMessage('This is not a JSON file.');
            return;
        }

        const title = file.name.split('.')[0];
        const reader = new FileReader();

        // Read uploaded file
        reader.onloadend = (e) => {
            try {
                console.log(e);
                setMessage('');
                const data = JSON.parse(e.target.result);

                // Validate format
                if (!(data[0] && data[0].title)) {
                    setMessage('Invalid JSON format.');
                    return;
                }

                // Create index
                index.createIndex(data);

                // get currentIndex
                $scope.$apply(() => {
                    $scope.setIndex();
                });

            } catch (ex) {
                setMessage('Invalid JSON file.');
            }
        };

        reader.readAsBinaryString(file);
    };


}])

