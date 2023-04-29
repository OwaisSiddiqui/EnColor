const targetNode = document.body;

const config = { childList: true, subtree: true };

const changeImg = async (img) => {
  console.log("*** Image was added! ***")
  img.src = "";
}

const callback = (mutationList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
        // Check added nodes
        for (const addedNode of mutation.addedNodes) {
            if (addedNode.nodeName.toLowerCase() === 'img') {
              changeImg(addedNode)
            }
        }
    }
  }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);

observer.disconnect();