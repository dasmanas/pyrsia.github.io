---
title: Authority Nodes
authors: sudhindra
tags: [authority, consensus, proof of authority, cloud, deployment, immutable ledger, BFT, security board]
---

Pyrsia builds consensus based on Proof of Authority which is exercised by the Authority Nodes. Authority nodes are run by trusted Partner organizations who join the Pyrsia community and decide to contribute to the network. More about this architecture was detailed in a the [Network Structure of Pyrsia](./2022-10-10-why-does-pyrsia-use-a-blockchain/#network-structure).

Authority nodes act as the only legal votes in the Proof of Authority to achieve Consensus on Pyrsia blockchain. Authority nodes are assigned keys to prove membership and they vote using those keys to verify packages on the Pyrsia network. These assigned keys are controlled and regenerated by the Pyrsia governance board. We explain here the process and the technology required to implement this.

## Pyrsia Security Board

Pyrsia project is working towards the concept of having a group of representatives forming a Security Board to ensure the security of the network and the artifacts served by the network. This board will have the scope of providing process and oversight over the following:

1. Pyrsia Network Architecture
2. Pyrsia Network Security
3. Pyrsia Blockchain Security
4. Pyrsia DevOps Practices
5. Pyrsia Build Infrastructure Security

Within the above scope the Security Board will provide a uniform review and regulation process to ensure that rogue elements are not able to control the network. This Security board will be formed with the representative organizations to Pyrsia via an election process.

As part of the normal functioning of this board, the Pyrsia infrastructure will be evaluated periodically and certified.

Details of this process will be documented separately under the Community section of the [Pyrsia website](https://pyrsia.io).

## Participating Authority Nodes

Any participating organization to Pyrsia is welcome to join the network and host/sponsor hosting an Authority node.
Although Authority nodes will require the approval of the Pyrsia Security Board. Once approved the sponsor of the authority node will have the following responsibilities:

1. Sponsor the cloud account and billing to host a large size Pyrsia Authority node - specifications will be provided and updated by the Security Board
2. Sponsor and provide DevOps personnel to maintain, update and repair the Pyrsia Authority node
3. Submit audit reports to the Security Board to ensure that the Authority node remains secure

Since Pyrsia Authority Node is open source - the source code, helm charts, deployment processes will be maintained by the Pyrsia team thus making it  easy to install and run the Pyrsia Authority Node in the cloud environment of choice.

## Participate in Proof of Authority

Once the infrastructure is up and running on the cloud, the Pyrsia nodes become part of the Pyrsia libp2p network and can download, search the Pyrsia network. In order to make these Pyrsia nodes part of the Consensus network this deployment will require some way to gain that authority.

Since we need to maintain a small but reliable and tamper-proof network access to authority will be limited. Only the participating organizations will have the ability to contribute authority nodes. A people driven process will be in place that determines the readiness of this new participating organization. The security board will drive this process and lay out guidelines to make it transparent.
The security board will also have the ability to assign authority keys to new participant organizations so that they can become part of the consensus process. Only approved Authority Nodes get an authority key.

Each organization will receive one key that will allow them to participate in voting and publishing packages to the network. This publishing process will allow them to commit new versions of packages or new packages to the Pyrsia network.

Security Board also reserves the right to revoke authority keys in case the keys or the authority nodes themselves get compromised. Security Board will review the devops practices periodically and suggest a refresh of the authority keys to ensure continued security of the immutable ledger.

## Growing the network

Pyrsia released the first working version of the network in our [0.2.0 release](https://github.com/pyrsia/pyrsia/releases/tag/v0.2.0) which included an Authority node hosted by JFrog. We are working towards adding another Authority node that will run on a different cloud provider's infrastructure and will be releasing it soon.

While we improve the infrastructure, we are also encouraging organizations to become part of the Pyrsia network and contribute Authority nodes and infrastructure to the network. If you are one of those organizations we would love to chat with you. Our goal is to make this network as distributed as possible - which allows Pyrsia artifacts to reach all the corners of the known internet as well as helps to keep the network running.

Don't hesitate to reach out to us!
