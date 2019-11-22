# voting-app-network

A Hyperledger Fabric blockchain network to cast votes

# Pre-requisites
<div>
<p>If you're running on Ubuntu, you can download the prerequisites using the following commands:</p>
  <code>curl -O https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh</code>
  <code>chmod u+x prereqs-ubuntu.sh</code>

<p>Next run the script - as this briefly uses sudo during its execution, you will be prompted for your password.</p>
  <code>./prereqs-ubuntu.sh</code>
</div>

<div>
<p>Next install the following tools:</p>
<code>npm install -g composer-cli</code>
  
<code>npm install -g composer-rest-server</code>

<code>npm install -g composer-playground</code>

<code>npm install -g yo generator-hyperledger-composer</code>
</div>

<div>  
<p>Run the following commands to install the local Hyperledger Fabric runtime:</p>
<code>mkdir ~/fabric-dev-servers</code>
  
<code>cd ~/fabric-dev-servers</code>

<code>curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz</code>

<code>tar -xvf fabric-dev-servers.tar.gz</code>

<code>export FABRIC_VERSION=hlfv12</code>

<code>./downloadFabric.sh</code>

<code>./startFabric.sh</code>

<code>./createPeerAdminCard.sh</code>
</div> 
  
# Testing Application
<p>Follow the steps below to run the application:</p>

<ol>
  <li>Go to Hyperledger Fabric Server Folder</li>
    <ul>
      <li>Open a terminal in there and run the command:<code>./startFabric.sh</code></li>
    </ul>
  <li>Go to voting-blockchain folder</li>
    <ul>
      <li>Open a new terminal in there and run the command:<code>composer network install --archiveFile voting-app-network@0.1.0.bna --card PeerAdmin@hlfv1</code></li>
      <li>To deploy the network now run the command:<code>composer network start --networkName voting-app-network --networkVersion 0.1.0 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file voting-app-admin.card</code></li>
    </ul>
 <li>To start the Rest Server open a new terminal in voting-blockchain folder</li>
    <ul><li>Run the command:<code>composer-rest-server -c admin@voting-app-network -n never -u true -w true</code></li></ul>
  <li>Go to the voting-angular-app and open a new terminal</li>
    <ul><li>Run the command:<code>npm start</code></li></ul>
</ol>
