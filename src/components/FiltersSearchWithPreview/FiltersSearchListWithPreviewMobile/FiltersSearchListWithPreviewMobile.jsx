// @flow

import React from 'react';
import MediaQuery from 'react-responsive';
import FiltersSearch from '../../FiltersSearch/FiltersSearch';
import { searchListData } from '../../../data/search.list.data';

const FiltersSearchListWithPreviewMobile = (): React$MixedElement => (
	<MediaQuery maxWidth={360}>
		<FiltersSearch searchListData={searchListData} />
	</MediaQuery>
);

export default FiltersSearchListWithPreviewMobile;
