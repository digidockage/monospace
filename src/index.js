/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                                                                 *
 *    Copyright (c) 2023 Sgobbi Federico                                                           *
 *    All rights reserved.                                                                         *
 *                                                                                                 *
 *    This file is licensed under the MIT License.                                                 *
 *    License text available at https://opensource.org/licenses/MIT                                *
 *                                                                                                 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// > > > > > > > > > > > > > > > > > > > > > > > Imports debug modules
import {
  DummyAdapter
} from '@digidockage/esm-usb-canbus-adapter';

// > > > > > > > > > > > > > > > > > > > > > > > The code

// Test Dummy adapter
const dummyDevice = new DummyAdapter();

console.log(`DummyAdapter supported baudrates: ${dummyDevice.getBusSupportedBaudrates()}`);

// Get configured device options
console.log(`DummyAdapter configured device port: ${dummyDevice.getDevicePort()}`);

// Get configured bus options
console.log(`DummyAdapter configured bus baudrate: ${dummyDevice.getBusBaudrate()}`);
console.log(`DummyAdapter configured bus filters: ${dummyDevice.getBusFilters()}`);
console.log(`DummyAdapter configured bus loopback: ${dummyDevice.getBusLoopback()}`);
