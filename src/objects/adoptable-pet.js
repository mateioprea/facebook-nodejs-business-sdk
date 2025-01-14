/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import CatalogItemChannelsToIntegrityStatus from './catalog-item-channels-to-integrity-status';

/**
 * AdoptablePet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdoptablePet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      address: 'address',
      adoptable_pet_id: 'adoptable_pet_id',
      adoption_application_form_url: 'adoption_application_form_url',
      age_bucket: 'age_bucket',
      animal_type: 'animal_type',
      applinks: 'applinks',
      availability: 'availability',
      breed: 'breed',
      category_specific_fields: 'category_specific_fields',
      coat_length: 'coat_length',
      color: 'color',
      currency: 'currency',
      description: 'description',
      features: 'features',
      gender: 'gender',
      id: 'id',
      image_fetch_status: 'image_fetch_status',
      images: 'images',
      name: 'name',
      price: 'price',
      sanitized_images: 'sanitized_images',
      secondary_color: 'secondary_color',
      shelter_email: 'shelter_email',
      shelter_name: 'shelter_name',
      shelter_page_id: 'shelter_page_id',
      shelter_phone: 'shelter_phone',
      size: 'size',
      tertiary_color: 'tertiary_color',
      unit_price: 'unit_price',
      url: 'url',
    });
  }

  static get ImageFetchStatus (): Object {
    return Object.freeze({
      direct_upload: 'DIRECT_UPLOAD',
      fetched: 'FETCHED',
      fetch_failed: 'FETCH_FAILED',
      no_status: 'NO_STATUS',
      outdated: 'OUTDATED',
      partial_fetch: 'PARTIAL_FETCH',
    });
  }

  getAugmentedRealitiesMetadata (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/augmented_realities_metadata'
    );
  }

  getChannelsToIntegrityStatus (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CatalogItemChannelsToIntegrityStatus,
      fields,
      params,
      fetchFirstPage,
      '/channels_to_integrity_status'
    );
  }

  getVideosMetadata (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/videos_metadata'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): AdoptablePet {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
