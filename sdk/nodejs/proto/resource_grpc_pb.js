// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2016-2018, Pulumi Corporation.  All rights reserved.
//
'use strict';
var grpc = require('grpc');
var resource_pb = require('./resource_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var provider_pb = require('./provider_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pulumirpc_InvokeRequest(arg) {
  if (!(arg instanceof provider_pb.InvokeRequest)) {
    throw new Error('Expected argument of type pulumirpc.InvokeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pulumirpc_InvokeRequest(buffer_arg) {
  return provider_pb.InvokeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pulumirpc_InvokeResponse(arg) {
  if (!(arg instanceof provider_pb.InvokeResponse)) {
    throw new Error('Expected argument of type pulumirpc.InvokeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pulumirpc_InvokeResponse(buffer_arg) {
  return provider_pb.InvokeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pulumirpc_ReadResourceRequest(arg) {
  if (!(arg instanceof resource_pb.ReadResourceRequest)) {
    throw new Error('Expected argument of type pulumirpc.ReadResourceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pulumirpc_ReadResourceRequest(buffer_arg) {
  return resource_pb.ReadResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pulumirpc_ReadResourceResponse(arg) {
  if (!(arg instanceof resource_pb.ReadResourceResponse)) {
    throw new Error('Expected argument of type pulumirpc.ReadResourceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pulumirpc_ReadResourceResponse(buffer_arg) {
  return resource_pb.ReadResourceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pulumirpc_RegisterResourceOutputsRequest(arg) {
  if (!(arg instanceof resource_pb.RegisterResourceOutputsRequest)) {
    throw new Error('Expected argument of type pulumirpc.RegisterResourceOutputsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pulumirpc_RegisterResourceOutputsRequest(buffer_arg) {
  return resource_pb.RegisterResourceOutputsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pulumirpc_RegisterResourceRequest(arg) {
  if (!(arg instanceof resource_pb.RegisterResourceRequest)) {
    throw new Error('Expected argument of type pulumirpc.RegisterResourceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pulumirpc_RegisterResourceRequest(buffer_arg) {
  return resource_pb.RegisterResourceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pulumirpc_RegisterResourceResponse(arg) {
  if (!(arg instanceof resource_pb.RegisterResourceResponse)) {
    throw new Error('Expected argument of type pulumirpc.RegisterResourceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_pulumirpc_RegisterResourceResponse(buffer_arg) {
  return resource_pb.RegisterResourceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// ResourceMonitor is the interface a source uses to talk back to the planning monitor orchestrating the execution.
var ResourceMonitorService = exports.ResourceMonitorService = {
  invoke: {
    path: '/pulumirpc.ResourceMonitor/Invoke',
    requestStream: false,
    responseStream: false,
    requestType: provider_pb.InvokeRequest,
    responseType: provider_pb.InvokeResponse,
    requestSerialize: serialize_pulumirpc_InvokeRequest,
    requestDeserialize: deserialize_pulumirpc_InvokeRequest,
    responseSerialize: serialize_pulumirpc_InvokeResponse,
    responseDeserialize: deserialize_pulumirpc_InvokeResponse,
  },
  readResource: {
    path: '/pulumirpc.ResourceMonitor/ReadResource',
    requestStream: false,
    responseStream: false,
    requestType: resource_pb.ReadResourceRequest,
    responseType: resource_pb.ReadResourceResponse,
    requestSerialize: serialize_pulumirpc_ReadResourceRequest,
    requestDeserialize: deserialize_pulumirpc_ReadResourceRequest,
    responseSerialize: serialize_pulumirpc_ReadResourceResponse,
    responseDeserialize: deserialize_pulumirpc_ReadResourceResponse,
  },
  registerResource: {
    path: '/pulumirpc.ResourceMonitor/RegisterResource',
    requestStream: false,
    responseStream: false,
    requestType: resource_pb.RegisterResourceRequest,
    responseType: resource_pb.RegisterResourceResponse,
    requestSerialize: serialize_pulumirpc_RegisterResourceRequest,
    requestDeserialize: deserialize_pulumirpc_RegisterResourceRequest,
    responseSerialize: serialize_pulumirpc_RegisterResourceResponse,
    responseDeserialize: deserialize_pulumirpc_RegisterResourceResponse,
  },
  registerResourceOutputs: {
    path: '/pulumirpc.ResourceMonitor/RegisterResourceOutputs',
    requestStream: false,
    responseStream: false,
    requestType: resource_pb.RegisterResourceOutputsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_pulumirpc_RegisterResourceOutputsRequest,
    requestDeserialize: deserialize_pulumirpc_RegisterResourceOutputsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ResourceMonitorClient = grpc.makeGenericClientConstructor(ResourceMonitorService);
