public searchMember() {
        const tempArr = [];
        let tempArr1 = [];
        this.searchclicked = true;
        this.temp1 = this.mutliSelectOptions.unSelectedList;
        // merge arrays without duplicate
        tempArr1 = _.uniq(this.unselectedOptionsInitial.concat(this.mutliSelectOptions.unSelectedList))
        if (this.memberSearchText) {
            tempArr1.reduce((n, val) => {
                //search for string match for each el of array
                if (val.toLowerCase().indexOf(this.memberSearchText.toLowerCase()) > -1) {
                    tempArr.push(val);
                }
            }, 0);
            //if search text exists then append searched el to unselected list            
            (tempArr.length > 0) ? (this.mutliSelectOptions.unSelectedList = tempArr.slice(0)) : (this.mutliSelectOptions.unSelectedList = []);
        } else {
            this.mutliSelectOptions.unSelectedList = _.uniq(this.unselectedOptionsInitial);
        }

        //remove the items in selected list - tempArr inorder to avoid duplicate
        this.mutliSelectOptions.selectedList.forEach((val, k) => {
            //if val is in unselected then pop it
            if (this.mutliSelectOptions.unSelectedList.find(x => x == val)) {
                this.mutliSelectOptions.unSelectedList.splice(this.mutliSelectOptions.unSelectedList.indexOf(val), 1);
            }
        });
    }
