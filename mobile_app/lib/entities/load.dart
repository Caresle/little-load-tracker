class Load {
  final int id;
  final String name;
  final String description;
  final List<LoadDetail> details;

  factory Load.fromJson(Map<String, dynamic> json) {
    return Load(
      id: json['id'],
      name: json['name'],
      description: json['description'],
      details: List<LoadDetail>.from(
        json['details'].map((x) => LoadDetail.fromJson(x)),
      ),
    );
  }

  Load({
    required this.id,
    required this.name,
    required this.description,
    required this.details,
  });
}

class LoadDetail {
  final int itemId;
  final String itemName;
  final String itemDescription;
  final int quantity;
  final int loadDetId;

  factory LoadDetail.fromJson(Map<String, dynamic> json) {
    return LoadDetail(
      itemId: json['itemId'] ?? 0,
      itemName: json['itemName'],
      itemDescription: json['itemDescription'],
      quantity: json['quantity'],
      loadDetId: json['loadDetId'],
    );
  }

  LoadDetail({
    required this.itemId,
    required this.itemName,
    required this.itemDescription,
    required this.quantity,
    required this.loadDetId,
  });
}
