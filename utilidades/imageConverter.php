<?php
class imageConverter{
    public function ImageConverter($_image){
        $image = file_get_contents($_image);
        if($image !== false){
            $base64 = base64_encode($image);
            $imageString = "data:image/jpeg;base64,".$base64;
            return $imageString;
        }else
            return false;
    }
}
?>