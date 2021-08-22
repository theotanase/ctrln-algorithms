class BrowserNavigation {

  private currentPage: NavigationNode | null = null;

  goTo(address: string) {

    const newNode: NavigationNode = {
      address: address,
      next: null,
      previous: null,
    };

    if (this.currentPage != null) {
      this.currentPage.next = newNode;
      newNode.previous = this.currentPage;
    }

    this.currentPage = newNode;
  }

  goBack() {
    if (this.currentPage != null && this.currentPage.previous != null) {
      this.currentPage = this.currentPage.previous;
    }
  }

  goForward() {
    if (this.currentPage != null && this.currentPage.next != null) {
      this.currentPage = this.currentPage.next;
    }
  }

  printCurrentPage() {
    if (this.currentPage != null) {
      console.log(this.currentPage.address);
    }
  }
}

interface NavigationNode {
  address: string;
  previous: NavigationNode | null;
  next: NavigationNode | null;
}

const myNavigation = new BrowserNavigation();
myNavigation.goTo("A");
myNavigation.printCurrentPage(); // A

myNavigation.goTo("B");
myNavigation.goTo("C");
myNavigation.printCurrentPage(); //C
myNavigation.goBack();
myNavigation.printCurrentPage(); // B

myNavigation.goForward();
myNavigation.printCurrentPage(); //C

myNavigation.goBack(); // B
myNavigation.goTo("D");
myNavigation.printCurrentPage(); //D
myNavigation.goBack();
myNavigation.printCurrentPage(); // B
